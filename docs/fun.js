(function(){
'use strict';
var doc=document,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(s){return doc.querySelector(s)}
function get(st,k){try{return window[st].getItem(k)}catch(e){return null}}
function set(st,k,v){try{window[st].setItem(k,v)}catch(e){}}

/* ---------- 4. sounds (WebAudio, off by default) ---------- */
var snd=get('localStorage','sloth.sound')==='1',ctx=null,master=null;
function audio(){
  if(ctx)return ctx;
  var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;
  try{ctx=new AC();master=ctx.createGain();master.gain.value=.12;master.connect(ctx.destination)}catch(e){ctx=null}
  return ctx}
function tone(f,t,d,type,v,to){
  var c=ctx;if(!c)return;var o=c.createOscillator(),g=c.createGain(),t0=c.currentTime+t;
  o.type=type||'sine';o.frequency.setValueAtTime(f,t0);if(to)o.frequency.exponentialRampToValueAtTime(to,t0+d);
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(v,t0+.008);g.gain.exponentialRampToValueAtTime(.0001,t0+d);
  o.connect(g);g.connect(master);o.start(t0);o.stop(t0+d+.02)}
function play(kind){
  if(!snd||!ctx)return;if(ctx.state==='suspended')try{ctx.resume()}catch(e){}
  if(kind==='click'){tone(540,0,.07,'triangle',.7,360)}
  else if(kind==='ding'){tone(880,0,.14,'sine',.8);tone(1319,.1,.22,'sine',.7)}
  else if(kind==='chime'){[523,659,784,1047].forEach(function(f,i){tone(f,i*.09,.3,'sine',.7)})}}
var sb=$('#snd'),sn=$('#snd-n');
function paintSnd(){if(!sb)return;sb.setAttribute('aria-pressed',snd?'true':'false');if(sn)sn.textContent=snd?'on':'off'}
if(sb)sb.addEventListener('click',function(){
  snd=!snd;set('localStorage','sloth.sound',snd?'1':'0');paintSnd();if(snd){audio();play('click')}});
paintSnd();
/* a remembered "on" only starts its audio engine after the visitor does something */
function wake(){if(snd)audio();doc.removeEventListener('pointerdown',wake);doc.removeEventListener('keydown',wake)}
doc.addEventListener('pointerdown',wake);doc.addEventListener('keydown',wake);
doc.addEventListener('click',function(e){
  var t=e.target&&e.target.closest&&e.target.closest('.btn,.cbtn,.dot,.slot-nav,summary,#scene');
  if(t&&t!==sb&&!t.hasAttribute('data-sound'))play('click')});

/* ---------- sound samples in the Showcase: play in place when the browser can, else the link opens the file ---------- */
var clip=null,clipBtn=null;
function canOgg(){try{return !!new Audio().canPlayType('audio/ogg; codecs="vorbis"')}catch(e){return false}}
[].forEach.call(doc.querySelectorAll('a[data-sound]'),function(a){
  a.setAttribute('role','button');
  a.addEventListener('click',function(e){
    if(!canOgg())return;e.preventDefault();
    if(clip){clip.pause();if(clipBtn)clipBtn.classList.remove('on')}
    clip=new Audio(a.getAttribute('href'));clipBtn=a;a.classList.add('on');
    clip.onended=clip.onerror=function(){a.classList.remove('on')};
    var p=clip.play();if(p&&p.catch)p.catch(function(){a.classList.remove('on')})})});

/* ---------- 2. advancement toasts ---------- */
var box=$('#toasts'),queue=[],busy=false,seen={};
try{seen=JSON.parse(get('sessionStorage','sloth.toasts')||'{}')||{}}catch(e){seen={}}
function toast(id,title,icon){
  if(!box||seen[id])return;seen[id]=1;set('sessionStorage','sloth.toasts',JSON.stringify(seen));
  queue.push([title,icon]);next()}
function next(){
  if(busy||!queue.length)return;busy=true;var q=queue.shift();
  var el=doc.createElement('div');el.className='toast';
  var ti=doc.createElement('span');ti.className='ti';var im=doc.createElement('img');im.src='img/'+q[1];im.width=32;im.height=32;im.alt='';ti.appendChild(im);
  var tx=doc.createElement('div'),a=doc.createElement('small'),b=doc.createElement('strong');
  a.textContent='Advancement made!';b.textContent=q[0];tx.appendChild(a);tx.appendChild(b);el.appendChild(ti);el.appendChild(tx);
  box.appendChild(el);
  requestAnimationFrame(function(){requestAnimationFrame(function(){el.classList.add('in');play('ding')})});
  setTimeout(function(){el.classList.remove('in');setTimeout(function(){el.remove();busy=false;next()},reduce?50:450)},4000)}
var SECS=[['make','Big Ideas','ico-sword.png'],['how','Four Easy Steps','ico-book.png'],['gallery','Window Shopper','ico-palette.png'],['features','Everything in the Box','ico-chest.png'],['showcase','Pixel Artist','ico-palette.png'],['trust','Safety First','ico-shield.png'],['requirements','Spec Check','ico-chip.png'],['faq','Curious Sloth','ico-magnifier.png']];
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var s=e.target._adv;io.unobserve(e.target);toast(s[0],s[1],s[2])}})},{threshold:.3});
  SECS.forEach(function(s){var el=doc.getElementById(s[0]);if(el){el._adv=s;io.observe(el)}})}
var dl=$('#dl');if(dl)dl.addEventListener('click',function(){toast('download','Ready to mod!','ico-chest.png')});

/* ---------- 3. XP scroll meter ---------- */
var xp=$('#xp'),fill=$('#xp-fill'),lab=$('#xp-lab'),maxed=false,flash=false,tick=false;
function levelUp(){
  flash=true;lab.textContent='Level up!';xp.classList.add('up');play('chime');
  setTimeout(function(){flash=false;xp.classList.remove('up');upd()},1600)}
function upd(){
  tick=false;var max=doc.documentElement.scrollHeight-window.innerHeight,p=max>0?Math.min(1,Math.max(0,window.pageYOffset/max)):0;
  fill.style.width=(p*100).toFixed(1)+'%';
  var lv=Math.floor(p*30);
  if(p>=.995){lv=30;if(!maxed){maxed=true;levelUp()}}else if(p<.9)maxed=false;
  if(!flash)lab.textContent='Lv '+lv}
if(xp&&fill&&lab){
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  window.addEventListener('resize',upd);upd()}

/* ---------- 5. release chest ---------- */
var cv=$('#chest-v'),cs=$('#chest-s');
/* no answer from GitHub (offline, rate limit): keep the plain link to the latest release that is in the HTML */
function soon(){if(cs)cs.textContent='See what is new'}
function fmt(d){try{return new Date(d).toLocaleDateString('en',{year:'numeric',month:'short',day:'numeric'})}catch(e){return ''}}
function chest(list){
  var rel=null,n=0;
  if(!Array.isArray(list))return soon();
  list.forEach(function(r){if(!r||r.draft)return;if(!rel)rel=r;(r.assets||[]).forEach(function(a){n+=a.download_count||0})});
  if(!rel||!rel.tag_name)return soon();
  cv.textContent='';var a=doc.createElement('a');a.href=/^https:\/\/github\.com\//.test(rel.html_url||'')?rel.html_url:'https://github.com/DeusesPR/Sloth-Mod/releases';a.target='_blank';a.rel='noopener';a.textContent=String(rel.tag_name).slice(0,24);cv.appendChild(a);
  cs.textContent=[fmt(rel.published_at||rel.created_at),n.toLocaleString('en')+(n===1?' download':' downloads')].filter(Boolean).join(' · ')}
if(cv&&cs){
  var cached=null;try{cached=JSON.parse(get('sessionStorage','sloth.release')||'null')}catch(e){}
  if(cached&&Date.now()-cached.t<6e5)chest(cached.d);
  else if(window.fetch){
    fetch('https://api.github.com/repos/DeusesPR/Sloth-Mod/releases',{headers:{Accept:'application/vnd.github+json'}})
      .then(function(r){if(!r.ok)throw 0;return r.json()})
      .then(function(d){set('sessionStorage','sloth.release',JSON.stringify({t:Date.now(),d:Array.isArray(d)?d.slice(0,30).map(function(r){return{draft:r.draft,tag_name:r.tag_name,html_url:r.html_url,published_at:r.published_at,created_at:r.created_at,assets:(r.assets||[]).map(function(a){return{download_count:a.download_count}})}}):[]}));chest(d)})
      .catch(soon)}}

/* ---------- 6. easter egg ---------- */
var CODE='sloth',KONAMI=['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'],typed='',keys=[],busyEgg=false;
function egg(){
  var s=$('.hero .sloth');toast('secret','Secret Sloth','ico-gem.png');if(!s||busyEgg)return;
  busyEgg=true;var r=s.getBoundingClientRect();
  if(r.bottom<0||r.top>window.innerHeight)s.scrollIntoView({block:'center',behavior:reduce?'auto':'smooth'});
  if(!reduce){
    s.classList.remove('dance');void s.offsetWidth;s.classList.add('dance');
    setTimeout(function(){
      var b=s.getBoundingClientRect(),cx=b.left+b.width/2,cy=b.top+b.height/2,cols=['#7be04e','#ffe066','#ffffff','#3f9a2e','#ffb020'];
      for(var i=0;i<26;i++){
        var p=doc.createElement('i');p.className='pp';p.style.background=cols[i%cols.length];p.style.left=cx-4+'px';p.style.top=cy-4+'px';doc.body.appendChild(p);
        var a=Math.random()*6.283,d=50+Math.random()*90,dx=Math.cos(a)*d,dy=Math.sin(a)*d-40;
        var an=p.animate?p.animate([{transform:'translate(0,0)',opacity:1},{transform:'translate('+dx+'px,'+dy+'px)',opacity:1,offset:.6},{transform:'translate('+dx*1.1+'px,'+(dy+70)+'px)',opacity:0}],{duration:900+Math.random()*500,easing:'ease-out'}):null;
        if(an)an.onfinish=(function(p){return function(){p.remove()}})(p);else p.remove()}
    },reduce?0:250);
    if(window.slothScene&&window.slothScene.craft)window.slothScene.craft();
    play('chime');
    setTimeout(function(){s.classList.remove('dance');busyEgg=false},2000)}
  else{play('chime');busyEgg=false}}
doc.addEventListener('keydown',function(e){
  if(e.ctrlKey||e.metaKey||e.altKey)return;var t=e.target,tn=t&&t.tagName;
  if(tn==='INPUT'||tn==='TEXTAREA'||tn==='SELECT'||(t&&t.isContentEditable))return;
  var k=(e.key||'').toLowerCase();if(!k)return;
  if(k.length===1){typed=(typed+k).slice(-CODE.length);if(typed===CODE){typed='';egg();return}}
  keys.push(k);if(keys.length>KONAMI.length)keys.shift();
  if(keys.join()===KONAMI.join()){keys=[];egg()}});
})();
