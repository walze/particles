import{T as I,P as W,S as k,a as B,R as H,b as U}from"./pixi.js.35faee12.js";const G=1.5,l=window.innerHeight>window.innerWidth,m=window.innerWidth,p=window.innerHeight,o=l?1080:1920,L=l?o:o*m/p,N=l?o*p/m:o,w=[Math.floor(L),Math.floor(N)];class O extends Error{constructor(n,s){super(s,{cause:n}),this.name="AssertionError",console.error(s||"Uncaught assertion","=>",n)}}const V=(t,n)=>{if(!t)throw new O(t,n)},[_,j]=w,$=new OffscreenCanvas(1,1),u=$.getContext("2d");V(u);u.fillStyle="#FFF";u.fillRect(0,0,1,1);const z=I.from($),d=66743015e-18;let h=734767309e5;const D=(t,n)=>{const[s,e]=t,[f,E]=n,c=f-s,i=E-e,a=Math.sqrt(c**2+i**2),y=d*h/a**2,T=c/a,q=i/a,F=T*y,S=q*y;return h*=1+d*10,[F,S,[c,i]]},J=[_/2,j/2],C=t=>{const[n,s,e]=D(t.coords,J);t.vx+=n,t.vy+=s,Math.sqrt(e[0]**2+e[1]**2)<=50&&(h*=1+Math.sqrt(d)/2,t.vx=0,t.vy=0,t.position.set(-1e5,-1e5)),t.position.set(t.x+t.vx,t.y+t.vy)};class K extends k{constructor(n,s){super(z),this.vx=-1,this.vy=-1,this.name=`${this.x}${this.y}`,this.x=n,this.y=s}get coords(){return[this.x,this.y]}}class Q extends W{constructor(){super(...arguments),this.children=[]}}const X=(t,n)=>Math.floor(Math.random()*(n-t+1))+t,[Y,Z]=w,r=2e5;console.info("Rendering",r,"particles");const x=new Q(r),g=t=>X(1,t),tt=()=>{for(let t=0;t<r;t++){const n=new K(g(Y),g(Z));C(n),x.addChild(n)}},[M,P]=w,nt=({x:t,y:n})=>t>-1e3||t<M+1e3||n>-1e3||n<P+1e3,st=()=>{for(let t=0;t<r;t++){const n=x.children[t];nt(n)&&C(n)}};B.system.autoStart=!1;const R=new H({width:M,height:P,backgroundColor:1118481,powerPreference:"high-performance",useContextAlpha:!1,antialias:!1,resolution:G}),v=new U(R),b=v.render.bind(v,x),A=()=>{st(),b(),requestAnimationFrame(A)},{body:et}=document,{view:ot}=R;tt();b();et.appendChild(ot);window.onload=A.bind(null,0);
//# sourceMappingURL=index.909e9e2e.js.map
