/* Creature viewer, no libraries.
   1. #c3d: a real 3D dragon. The boxes, the painted skin and the bone layout come from a dragon made by Sloth-Mod;
      the wings flap, the tail sways. Drag to turn it.
   2. #turn: real in-game pictures of a few creatures from four sides (these are pictures, not 3D). */
(function(){
'use strict';
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 1. the 3D dragon ---------- */
var box=document.getElementById('c3d');
if(box){(function(){
  var cv=box.querySelector('canvas.view'),g=cv&&cv.getContext&&cv.getContext('2d');if(!g)return;
  var W=cv.width,H=cv.height,yaw=-.75,pitch=.28,flap=!reduce,spin=!reduce,drag=null,vis=false,run=false,last=0,T=0;
  var data=null,skin=null,bones=null,faces=null,R=100,ctr=[0,30,0],LIGHT=[-.4,.8,.45];
  var bFlap=box.querySelector('[data-flap]'),bSpin=box.querySelector('[data-spin]');

  /* tiny 4x3 matrices: [r00 r01 r02 r10 r11 r12 r20 r21 r22 tx ty tz] */
  function mul(a,b){return[
    a[0]*b[0]+a[1]*b[3]+a[2]*b[6],a[0]*b[1]+a[1]*b[4]+a[2]*b[7],a[0]*b[2]+a[1]*b[5]+a[2]*b[8],
    a[3]*b[0]+a[4]*b[3]+a[5]*b[6],a[3]*b[1]+a[4]*b[4]+a[5]*b[7],a[3]*b[2]+a[4]*b[5]+a[5]*b[8],
    a[6]*b[0]+a[7]*b[3]+a[8]*b[6],a[6]*b[1]+a[7]*b[4]+a[8]*b[7],a[6]*b[2]+a[7]*b[5]+a[8]*b[8],
    a[0]*b[9]+a[1]*b[10]+a[2]*b[11]+a[9],a[3]*b[9]+a[4]*b[10]+a[5]*b[11]+a[10],a[6]*b[9]+a[7]*b[10]+a[8]*b[11]+a[11]]}
  function rx(a){var c=Math.cos(a),s=Math.sin(a);return[1,0,0,0,c,-s,0,s,c,0,0,0]}
  function ry(a){var c=Math.cos(a),s=Math.sin(a);return[c,0,s,0,1,0,-s,0,c,0,0,0]}
  function rz(a){var c=Math.cos(a),s=Math.sin(a);return[c,-s,0,s,c,0,0,0,1,0,0,0]}
  function tr(x,y,z){return[1,0,0,0,1,0,0,0,1,x,y,z]}
  function ap(m,p){return[m[0]*p[0]+m[1]*p[1]+m[2]*p[2]+m[9],m[3]*p[0]+m[4]*p[1]+m[5]*p[2]+m[10],m[6]*p[0]+m[7]*p[1]+m[8]*p[2]+m[11]]}
  function an(m,n){return[m[0]*n[0]+m[1]*n[1]+m[2]*n[2],m[3]*n[0]+m[4]*n[1]+m[5]*n[2],m[6]*n[0]+m[7]*n[1]+m[8]*n[2]]}
  var D=Math.PI/180;

  /* the pose at time t (seconds): rest pose plus a wing flap and a slow tail sway */
  function pose(t){
    var w=[],i,b,n,a,f=flap?1:0,s=Math.sin(t*5.2),extra=[0,0,0];
    for(i=0;i<bones.length;i++){
      b=bones[i];n=b[0];a=[-b[3][0]*D,-b[3][1]*D,b[3][2]*D];
      var addz=0,addy=0,addx=0,dy=0;
      if(f){
        var left=/^wing_l/.test(n),right=/^wing_r/.test(n),sg=left?1:right?-1:0;
        if(sg&&n.indexOf('_mem')<0&&n.indexOf('_web')<0&&n.indexOf('deco')<0){
          var lvl=n==='wing_l'||n==='wing_r'?0:n.indexOf('fore')>0?1:2;
          addz=sg*D*(34*Math.sin(t*5.2-lvl*.75)+(lvl?6:8)*0)*(lvl?(lvl===1?.55:.4):1)+sg*D*5;
        }
        if(/^tail[1-6]$/.test(n)){var k=+n.charAt(4);addy=D*7*Math.sin(t*2.3-k*.55)}
        if(/^neck[1-4]$/.test(n)){addx=D*1.8*Math.sin(t*5.2-1.2)}
        if(n==='root')dy=2.2*Math.sin(t*5.2+.9)
      }
      var m=mul(mul(ry(a[1]+addy),rx(a[0]+addx)),rz(a[2]+addz));
      var loc=mul(mul(tr(b[2][0],b[2][1]+dy,b[2][2]),m),tr(-b[2][0],-b[2][1],-b[2][2]));
      w[i]=b[1]>=0?mul(w[b[1]],loc):loc}
    return w}

  var DIRS=[ /* north south east west top bottom: normal, origin corner, u, v, size axes */
    {n:[0,0,-1]},{n:[0,0,1]},{n:[1,0,0]},{n:[-1,0,0]},{n:[0,1,0]},{n:[0,-1,0]}];
  function build(){
    faces=[];
    data.boxes.forEach(function(b,bi){
      var f=b[1],t=b[2],uv=b[3],x0=f[0],y0=f[1],z0=f[2],x1=t[0],y1=t[1],z1=t[2],w=x1-x0,h=y1-y0,d=z1-z0;
      function add(k,n,o,u,v,su,sv){var r=uv[k];if(!r||su<=0||sv<=0)return;
        faces.push({b:b[0],n:n,o:o,u:[u[0]*su,u[1]*su,u[2]*su],v:[v[0]*sv,v[1]*sv,v[2]*sv],r:r})}
      add(0,[0,0,-1],[x1,y1,z0],[-1,0,0],[0,-1,0],w,h);
      add(1,[0,0,1],[x0,y1,z1],[1,0,0],[0,-1,0],w,h);
      add(2,[1,0,0],[x1,y1,z1],[0,0,-1],[0,-1,0],d,h);
      add(3,[-1,0,0],[x0,y1,z0],[0,0,1],[0,-1,0],d,h);
      add(4,[0,1,0],[x0,y1,z0],[1,0,0],[0,0,1],w,d);
      add(5,[0,-1,0],[x0,y0,z1],[1,0,0],[0,0,-1],w,d)});
    /* size of the dragon on screen */
    var w0=pose(0),lo=[1e9,1e9,1e9],hi=[-1e9,-1e9,-1e9];
    faces.forEach(function(q){var p=ap(w0[q.b],q.o);for(var k=0;k<3;k++){if(p[k]<lo[k])lo[k]=p[k];if(p[k]>hi[k])hi[k]=p[k]}});
    ctr=[(lo[0]+hi[0])/2,(lo[1]+hi[1])/2,(lo[2]+hi[2])/2];
    R=Math.max(hi[0]-lo[0],hi[2]-lo[2])*.5*.97}

  function cam(p,cy,sy,cp,sp){var x=p[0]-ctr[0],y=p[1]-ctr[1],z=p[2]-ctr[2],X=x*cy+z*sy,Z=-x*sy+z*cy,Y=y*cp-Z*sp;Z=y*sp+Z*cp;return[X,Y,Z]}
  function draw(){
    g.clearRect(0,0,W,H);if(!faces||!skin)return;
    var w=pose(T),cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch),sc=W/(2*R),list=[],i,q;
    for(i=0;i<faces.length;i++){q=faces[i];var m=w[q.b];
      var nw=an(m,q.n),nc=cam(nw,cy,sy,cp,sp);nc[0]+=0;
      /* the normal is turned with the same rotation (no centre shift) */
      var nn=[nw[0]*cy+nw[2]*sy,0,0],nz0=-nw[0]*sy+nw[2]*cy;nn[1]=nw[1]*cp-nz0*sp;nn[2]=nw[1]*sp+nz0*cp;
      if(nn[2]<=0)continue;
      var o=cam(ap(m,q.o),cy,sy,cp,sp),pu=cam(ap(m,[q.o[0]+q.u[0],q.o[1]+q.u[1],q.o[2]+q.u[2]]),cy,sy,cp,sp),pv=cam(ap(m,[q.o[0]+q.v[0],q.o[1]+q.v[1],q.o[2]+q.v[2]]),cy,sy,cp,sp);
      var l=Math.max(0,nn[0]*LIGHT[0]+nn[1]*LIGHT[1]+nn[2]*LIGHT[2]);
      list.push({z:o[2]+(pu[2]+pv[2]-2*o[2])/2,o:o,u:pu,v:pv,r:q.r,s:.55+.55*l})}
    list.sort(function(a,b){return a.z-b.z});
    g.imageSmoothingEnabled=false;
    for(i=0;i<list.length;i++){var f=list[i],r=f.r,o2=f.o,u2=f.u,v2=f.v;
      var ox=W/2+o2[0]*sc,oy=H/2+10-o2[1]*sc,ux=W/2+u2[0]*sc,uy=H/2+10-u2[1]*sc,vx=W/2+v2[0]*sc,vy=H/2+10-v2[1]*sc;
      g.save();g.setTransform((ux-ox)/r[2],(uy-oy)/r[2],(vx-ox)/r[3],(vy-oy)/r[3],ox,oy);
      g.drawImage(skin,r[0],r[1],r[2],r[3],0,0,r[2],r[3]);
      if(f.s<1){g.fillStyle='rgba(8,6,20,'+(1-f.s).toFixed(2)+')';g.fillRect(0,0,r[2],r[3])}
      else if(f.s>1.02){g.fillStyle='rgba(255,240,220,'+Math.min(.2,(f.s-1)*.5).toFixed(2)+')';g.fillRect(0,0,r[2],r[3])}
      g.restore()}}
  function frame(t){
    run=false;if(!vis||!faces||!skin)return;
    var dt=Math.min((t-last)/1000,.1);last=t;
    if(flap)T+=dt;if(spin&&!drag)yaw+=dt*.5;
    draw();if((flap||spin||drag)&&vis){run=true;requestAnimationFrame(frame)}}
  function kick(){if(run)return;if(!vis||!faces||!skin){return}run=true;last=performance.now();requestAnimationFrame(frame);if(!flap&&!spin)draw()}
  function still(){draw()}
  /* input */
  cv.addEventListener('pointerdown',function(e){drag={x:e.clientX,y:e.clientY,yaw:yaw,pitch:pitch};try{cv.setPointerCapture(e.pointerId)}catch(x){}});
  cv.addEventListener('pointermove',function(e){if(!drag)return;yaw=drag.yaw+(e.clientX-drag.x)*.011;pitch=Math.max(-.2,Math.min(1.2,drag.pitch+(e.clientY-drag.y)*.008));if(!run)still()});
  function up(){drag=null;kick()}
  cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  cv.addEventListener('keydown',function(e){var k=e.key,h=true;
    if(k==='ArrowLeft')yaw-=.25;else if(k==='ArrowRight')yaw+=.25;else if(k==='ArrowUp')pitch=Math.max(-.2,pitch-.1);else if(k==='ArrowDown')pitch=Math.min(1.2,pitch+.1);else h=false;
    if(h){e.preventDefault();if(!run)still()}});
  function lab(){if(bFlap){bFlap.textContent=flap?'Stop flapping':'Flap wings';bFlap.setAttribute('aria-pressed',flap?'true':'false')}
    if(bSpin){bSpin.textContent=spin?'Stop turning':'Turn around';bSpin.setAttribute('aria-pressed',spin?'true':'false')}}
  if(bFlap)bFlap.addEventListener('click',function(){flap=!flap;lab();kick();if(!flap)still()});
  if(bSpin)bSpin.addEventListener('click',function(){spin=!spin;lab();kick();if(!spin)still()});
  lab();
  /* load only when it comes near the screen */
  function load(){if(load.d)return;load.d=true;
    var base=box.getAttribute('data-src'),x=new XMLHttpRequest();x.open('GET',base+'ember.json');
    x.onload=function(){try{data=JSON.parse(x.responseText)}catch(e){return}bones=data.bones;build();
      var im=new Image();im.onload=function(){skin=im;T=reduce?.4:0;draw();kick()};im.src=base+'ember.png'};x.send()}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){vis=es[es.length-1].isIntersecting;if(vis)kick()}).observe(box);
    var lz=new IntersectionObserver(function(es){if(es.some(function(e){return e.isIntersecting})){lz.disconnect();load()}},{rootMargin:'500px'});lz.observe(box)}
  else{vis=true;load()}
  window.slothCreature={ready:function(){return!!(faces&&skin)},show:function(y,p,t){flap=false;spin=false;yaw=y;pitch=p;T=t||0;draw()}};
})()}

/* ---------- 2. real pictures from four sides ---------- */
var tb=document.getElementById('turn');
if(tb){(function(){
  var im=tb.querySelector('img.pic'),names=[].slice.call(tb.querySelectorAll('[data-who]')),views=[].slice.call(tb.querySelectorAll('[data-view]')),cap=tb.querySelector('[data-cap]');
  var V=['front','three_quarter','side','back'],VL=['Front','Three-quarter','Side','Back'],who=names[0].getAttribute('data-who'),wl=names[0].getAttribute('data-label'),vi=1,cache={};
  function show(){
    var src='img/turn/'+who+'-'+V[vi]+'.webp';im.src=src;
    im.alt=wl+' in Minecraft, '+VL[vi].toLowerCase()+' view. A real in-game picture.';
    cap.textContent=wl+', '+VL[vi].toLowerCase()+' view';
    names.forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-who')===who?'true':'false')});
    views.forEach(function(b){b.setAttribute('aria-pressed',+b.getAttribute('data-view')===vi?'true':'false')});
    /* load the next one quietly so turning feels quick */
    var nx='img/turn/'+who+'-'+V[(vi+1)%4]+'.webp';if(!cache[nx]){cache[nx]=1;var p=new Image();p.src=nx}}
  names.forEach(function(b){b.addEventListener('click',function(){who=b.getAttribute('data-who');wl=b.getAttribute('data-label');show()})});
  views.forEach(function(b){b.addEventListener('click',function(){vi=+b.getAttribute('data-view');show()})});
  var dx=null,acc=0;
  im.addEventListener('pointerdown',function(e){dx=e.clientX;acc=0;try{im.setPointerCapture(e.pointerId)}catch(x){}});
  im.addEventListener('pointermove',function(e){if(dx===null)return;var d=e.clientX-dx;if(Math.abs(d)>70){vi=(vi+(d<0?1:3))%4;dx=e.clientX;show()}});
  im.addEventListener('pointerup',function(){dx=null});im.addEventListener('pointercancel',function(){dx=null});
  show();
})()}
})();
