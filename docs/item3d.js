/* Showcase viewer: spinning items (every pixel is a thin voxel, the way the game draws a dropped item), blocks and
   blocky mobs. Everything it shows was drawn by Sloth-Mod's art engine (img/showcase/, packed by scripts/site-showcase.py).
   No libraries. window.slothShowcase is a small hook used to record the README clips. */
(function(){
'use strict';
var box=document.getElementById('item3d');if(!box)return;
var cv=box.querySelector('canvas.view'),ctx=cv&&cv.getContext&&cv.getContext('2d');if(!ctx)return;
var btns=[].slice.call(box.querySelectorAll('.picks [data-key]')),tabs=[].slice.call(box.querySelectorAll('[data-tab]')),name=box.querySelector('[data-name]');
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var S=cv.width,yaw=.6,pitch=.34,cur=0,mesh=null,spin=!reduce,drag=null,last=0,vis=true,data=null,atlas=null,skins={},started=false;
var LIGHT=[-.45,.75,.5];

/* ---- pixels ---- */
function pixels(im,x,y,w,h){
  var c=document.createElement('canvas');c.width=w;c.height=h;var g=c.getContext('2d');g.drawImage(im,x,y,w,h,0,0,w,h);
  var d=g.getImageData(0,0,w,h).data,px=[],i,j;
  for(j=0;j<h;j++){px[j]=[];for(i=0;i<w;i++){var k=(j*w+i)*4;px[j][i]=d[k+3]>40?[d[k],d[k+1],d[k+2]]:null}}
  return px}
function fin(q){ /* centre the mesh and work out how big it is on screen */
  var lo=[1e9,1e9,1e9],hi=[-1e9,-1e9,-1e9],i,j,k,r=0;
  for(i=0;i<q.length;i++)for(j=0;j<4;j++)for(k=0;k<3;k++){var v=q[i].p[j][k];if(v<lo[k])lo[k]=v;if(v>hi[k])hi[k]=v}
  var c=[(lo[0]+hi[0])/2,(lo[1]+hi[1])/2,(lo[2]+hi[2])/2];
  for(i=0;i<q.length;i++)for(j=0;j<4;j++){var p=q[i].p[j];p[0]-=c[0];p[1]-=c[1];p[2]-=c[2];r=Math.max(r,Math.sqrt(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]))}
  return{q:q,r:r||1}}

/* ---- meshes ---- */
function itemMesh(px){
  var q=[],T=.5,x,y;
  function add(n,pts,col){q.push({n:n,p:pts,c:col})}
  for(y=0;y<16;y++)for(x=0;x<16;x++){var c0=px[y][x];if(!c0)continue;
    var X=x-8,Y=8-y; /* Y up */
    add([0,0,1],[[X,Y,T],[X+1,Y,T],[X+1,Y-1,T],[X,Y-1,T]],c0);
    add([0,0,-1],[[X+1,Y,-T],[X,Y,-T],[X,Y-1,-T],[X+1,Y-1,-T]],c0);
    if(y===0||!px[y-1][x])add([0,1,0],[[X,Y,-T],[X+1,Y,-T],[X+1,Y,T],[X,Y,T]],c0);
    if(y===15||!px[y+1][x])add([0,-1,0],[[X,Y-1,T],[X+1,Y-1,T],[X+1,Y-1,-T],[X,Y-1,-T]],c0);
    if(x===0||!px[y][x-1])add([-1,0,0],[[X,Y,-T],[X,Y,T],[X,Y-1,T],[X,Y-1,-T]],c0);
    if(x===15||!px[y][x+1])add([1,0,0],[[X+1,Y,T],[X+1,Y,-T],[X+1,Y-1,-T],[X+1,Y-1,T]],c0)}
  var m=fin(q);m.r=10.4;return m}
/* One face of a box as texel quads. o: the corner where the picture's top-left sits, u/v: the directions the picture
   runs across and down (unit vectors), nu/nv: texels each way, su/sv: size of a texel. */
function face(q,n,o,u,v,nu,nv,su,sv,px,flat){
  for(var j=0;j<nv;j++)for(var i=0;i<nu;i++){
    var c=px?px[j]&&px[j][i]:flat;if(!c)c=flat;if(!c)continue;
    var a=[o[0]+u[0]*i*su+v[0]*j*sv,o[1]+u[1]*i*su+v[1]*j*sv,o[2]+u[2]*i*su+v[2]*j*sv];
    q.push({n:n,c:c,p:[a,[a[0]+u[0]*su,a[1]+u[1]*su,a[2]+u[2]*su],[a[0]+u[0]*su+v[0]*sv,a[1]+u[1]*su+v[1]*sv,a[2]+u[2]*su+v[2]*sv],[a[0]+v[0]*sv,a[1]+v[1]*sv,a[2]+v[2]*sv]]})}}
/* a box from (x0,y0,z0) to (x1,y1,z1); tex(name) gives the pixel rows of that face. Same face layout as the app's 3D viewer. */
function boxMesh(q,f,t,tex,flat){
  var x0=f[0],y0=f[1],z0=f[2],x1=t[0],y1=t[1],z1=t[2],w=x1-x0,h=y1-y0,d=z1-z0;
  function put(nm,n,o,u,v,a,b){var px=tex(nm),nu=px?px[0].length:1,nv=px?px.length:1;face(q,n,o,u,v,nu,nv,a/nu,b/nv,px,flat)}
  put('north',[0,0,-1],[x1,y1,z0],[-1,0,0],[0,-1,0],w,h);
  put('south',[0,0,1],[x0,y1,z1],[1,0,0],[0,-1,0],w,h);
  put('east',[1,0,0],[x1,y1,z1],[0,0,-1],[0,-1,0],d,h);
  put('west',[-1,0,0],[x0,y1,z0],[0,0,1],[0,-1,0],d,h);
  put('top',[0,1,0],[x0,y1,z0],[1,0,0],[0,0,1],w,d);
  put('bottom',[0,-1,0],[x0,y0,z1],[1,0,0],[0,0,-1],w,d)}
function cell(c){return pixels(atlas,c[0],c[1],16,16)}
function blockMesh(b){
  var top=cell(b.top),side=cell(b.side),bot=cell(b.bottom),q=[];
  boxMesh(q,[-8,-8,-8],[8,8,8],function(n){return n==='top'?top:n==='bottom'?bot:side});
  var m=fin(q);m.r=12.6;return m}
function hex(c){return[parseInt(c.substr(1,2),16),parseInt(c.substr(3,2),16),parseInt(c.substr(5,2),16)]}
function mobMesh(m,skin){
  var q=[];
  m.boxes.forEach(function(b){
    boxMesh(q,b.from,b.to,function(n){var r=b.uv&&b.uv[n];return r?pixels(skin,r[0],r[1],r[2],r[3]):null},hex(b.color||'#8a8a8a'))});
  var out=fin(q);out.r*=1.08;out.turn=Math.PI;return out} /* mobs face -z: turn them to the camera */

/* ---- drawing ---- */
function rot(v,cy,sy,cp,sp){var x=v[0]*cy+v[2]*sy,z=-v[0]*sy+v[2]*cy,y=v[1]*cp-z*sp;z=v[1]*sp+z*cp;return[x,y,z]}
function render(g,W,m,ya,pi){
  var y=ya+(m.turn||0),cy=Math.cos(y),sy=Math.sin(y),cp=Math.cos(pi),sp=Math.sin(pi),sc=W/(2.02*m.r),list=[],i,j,q=m.q;
  g.clearRect(0,0,W,W);
  for(i=0;i<q.length;i++){var f=q[i],n=rot(f.n,cy,sy,cp,sp);if(n[2]<=0)continue; /* camera looks down -z: visible faces point +z */
    var pts=[],zs=0;for(j=0;j<4;j++){var r=rot(f.p[j],cy,sy,cp,sp);pts.push(r);zs+=r[2]}
    var l=Math.max(0,n[0]*LIGHT[0]+n[1]*LIGHT[1]+n[2]*LIGHT[2]),sh=.52+.58*l;
    list.push({z:zs/4,pts:pts,c:f.c,s:sh})}
  list.sort(function(a,b){return a.z-b.z});
  g.lineJoin='round';g.lineWidth=1;
  for(i=0;i<list.length;i++){var o=list[i],col='rgb('+Math.min(255,o.c[0]*o.s|0)+','+Math.min(255,o.c[1]*o.s|0)+','+Math.min(255,o.c[2]*o.s|0)+')';
    g.fillStyle=col;g.strokeStyle=col;g.beginPath();
    for(j=0;j<4;j++){var X=W/2+o.pts[j][0]*sc,Y=W/2-o.pts[j][1]*sc;j?g.lineTo(X,Y):g.moveTo(X,Y)}
    g.closePath();g.fill();g.stroke()}}
function draw(){if(mesh)render(ctx,S,mesh,yaw,pitch);else ctx.clearRect(0,0,S,S)}
function frame(t){
  if(spin&&!drag&&vis){yaw+=(t-last)*.0006}
  last=t;draw();if(spin&&vis)requestAnimationFrame(frame);else started=false}
function loop(){if(spin&&vis){if(started)return;started=true;last=performance.now();requestAnimationFrame(frame)}else draw()}

/* ---- data ---- */
function meshOf(b){
  if(!data||!atlas)return null;
  var kind=b.getAttribute('data-kind'),key=b.getAttribute('data-key');
  if(b._mesh)return b._mesh;
  if(kind==='item'&&data.items[key])b._mesh=itemMesh(cell(data.items[key]));
  else if(kind==='block'&&data.blocks[key])b._mesh=blockMesh(data.blocks[key]);
  else if(kind==='mob'&&data.mobs[key]&&skins[key])b._mesh=mobMesh(data.mobs[key],skins[key]);
  return b._mesh||null}
function thumb(b){
  var c=b.querySelector('canvas');if(!c||b._thumb)return;var m=meshOf(b);if(!m)return;
  var g=c.getContext('2d'),kind=b.getAttribute('data-kind');
  if(kind==='item'){var p=data.items[b.getAttribute('data-key')];g.imageSmoothingEnabled=false;g.clearRect(0,0,c.width,c.height);g.drawImage(atlas,p[0],p[1],16,16,0,0,c.width,c.height)}
  else render(g,c.width,m,kind==='mob'?.7:.75,.42);
  b._thumb=true}
function ready(){btns.forEach(thumb);if(!mesh){mesh=meshOf(btns[cur]);loop()}}
function img(src,cb){var im=new Image();im.onload=function(){cb(im)};im.src=src}
function load(){
  if(load.done)return;load.done=true;
  var base=box.getAttribute('data-src')||'img/showcase/';
  var x=new XMLHttpRequest();x.open('GET',base+'showcase.json');
  x.onload=function(){try{data=JSON.parse(x.responseText)}catch(e){return}
    img(base+data.atlas,function(im){atlas=im;ready()});
    Object.keys(data.mobs).forEach(function(k){img(base+data.mobs[k].skin,function(im){skins[k]=im;ready()})})};
  x.send()}

/* ---- picking ---- */
function label(b){return b.getAttribute('data-label')}
function pick(k){cur=(k+btns.length)%btns.length;var b=btns[cur],tab=b.getAttribute('data-cat');
  btns.forEach(function(x,i){x.setAttribute('aria-pressed',i===cur?'true':'false');x.hidden=x.getAttribute('data-cat')!==tab});
  tabs.forEach(function(t){t.setAttribute('aria-pressed',t.getAttribute('data-tab')===tab?'true':'false')});
  name.textContent=label(b);
  cv.setAttribute('aria-label','Spinning 3D '+label(b)+', drawn by the Sloth-Mod art engine. Drag or use the arrow keys to turn it, press Enter for the next one.');
  mesh=meshOf(b);if(spin)loop();else draw()}
btns.forEach(function(b,i){b.addEventListener('click',function(){pick(i)})});
tabs.forEach(function(t){t.addEventListener('click',function(){var c=t.getAttribute('data-tab');for(var i=0;i<btns.length;i++)if(btns[i].getAttribute('data-cat')===c){pick(i);break}})});
/* drag to rotate; a tap without moving shows the next one */
cv.addEventListener('pointerdown',function(e){drag={x:e.clientX,y:e.clientY,yaw:yaw,pitch:pitch,moved:false};try{cv.setPointerCapture(e.pointerId)}catch(x){}});
cv.addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>4)drag.moved=true;
  yaw=drag.yaw+dx*.012;pitch=Math.max(-1.2,Math.min(1.2,drag.pitch+dy*.01));if(!spin)draw()});
function up(){if(!drag)return;var m=drag.moved;drag=null;if(!m)pick(cur+1);else if(!spin)draw()}
cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',function(){drag=null});
cv.addEventListener('keydown',function(e){var k=e.key,h=true;
  if(k==='ArrowLeft')yaw-=.26;else if(k==='ArrowRight')yaw+=.26;else if(k==='ArrowUp')pitch=Math.max(-1.2,pitch-.15);else if(k==='ArrowDown')pitch=Math.min(1.2,pitch+.15);
  else if(k==='Enter'||k===' ')pick(cur+1);else h=false;
  if(h){e.preventDefault();if(!spin)draw()}});
/* the art is only fetched when the section comes near the screen */
if('IntersectionObserver' in window){
  new IntersectionObserver(function(es){var v=es[es.length-1].isIntersecting;if(v&&!vis){vis=true;loop()}else vis=v}).observe(box);
  var lz=new IntersectionObserver(function(es){if(es.some(function(e){return e.isIntersecting})){lz.disconnect();load()}},{rootMargin:'600px'});lz.observe(box)}
else load();
var pz=box.querySelector('[data-spin]');
if(pz){if(reduce){pz.hidden=true}pz.addEventListener('click',function(){spin=!spin;pz.textContent=spin?'Stop spinning':'Spin';if(spin)loop()})}
if(reduce){yaw=.55}
pick(0);
window.slothShowcase={load:load,count:btns.length,
  ready:function(){return!!(data&&atlas&&btns.every(function(b){return meshOf(b)}))},
  keys:function(){return btns.map(function(b){return b.getAttribute('data-key')})},
  show:function(key,y,p){spin=false;for(var i=0;i<btns.length;i++)if(btns[i].getAttribute('data-key')===key){if(i!==cur)pick(i);break}yaw=y;pitch=p;mesh=meshOf(btns[cur]);draw()}};
})();
