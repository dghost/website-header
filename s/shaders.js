/* File generated with Shader Minifier 1.1.4
 * http://www.ctrl-alt-test.fr
 */

var fbmShader =
 "uniform float time,scale;" +
 "vec4 t(vec4 y)" +
 "{" +
   "return mod((y*34.+1.)*y,289.);" +
 "}" +
 "vec4 v(vec4 y)" +
 "{" +
   "return 1.79284-.853735*y;" +
 "}" +
 "float s(vec3 y)" +
 "{" +
   "const vec2 d=vec2(1./6.,1./3.);" +
   "const vec4 a=vec4(0.,.5,1.,2.);" +
   "vec3 x=floor(y+dot(y,d.yyy)),z=y-x+dot(x,d.xxx),s=step(z.yzx,z.xyz),r=1.-s,w=min(s.xyz,r.zxy),o=max(s.xyz,r.zxy),e=z-w+d.xxx,c=z-o+2.*d.xxx,l=z-1.+3.*d.xxx;" +
   "x=mod(x,289.);" +
   "vec4 f=t(t(t(x.z+vec4(0.,w.z,o.z,1.))+x.y+vec4(0.,w.y,o.y,1.))+x.x+vec4(0.,w.x,o.x,1.));" +
   "float m=1./7.;" +
   "vec3 n=m*a.wyz-a.xzx;" +
   "vec4 i=f-49.*floor(f*n.z*n.z),g=floor(i*n.z),b=floor(i-7.*g),u=g*n.x+n.yyyy,F=b*n.x+n.yyyy,C=1.-abs(u)-abs(F),p=vec4(u.xy,F.xy),Z=vec4(u.zw,F.zw),Y=floor(p)*2.+1.,X=floor(Z)*2.+1.,W=-step(C,vec4(0.)),V=p.xzyw+Y.xzyw*W.xxyy,U=Z.xzyw+X.xzyw*W.zzww;" +
   "vec3 T=vec3(V.xy,C.x),S=vec3(V.zw,C.y),R=vec3(U.xy,C.z),Q=vec3(U.zw,C.w);" +
   "vec4 P=v(vec4(dot(T,T),dot(S,S),dot(R,R),dot(Q,Q)));" +
   "T*=P.x;" +
   "S*=P.y;" +
   "R*=P.z;" +
   "Q*=P.w;" +
   "vec4 O=max(.6-vec4(dot(z,z),dot(e,e),dot(c,c),dot(l,l)),0.);" +
   "O=O*O;" +
   "return 42.*dot(O*O,vec4(dot(T,z),dot(S,e),dot(R,c),dot(Q,l)));" +
 "}" +
 "void main()" +
 "{" +
   "vec3 y;" +
   "y.xy=gl_FragCoord.xy*(scale/200.);" +
   "y.z=time*.1;" +
   "float v=abs(s(y));" +
   "v+=.5*abs(s(y*2.));" +
   "v+=.25*abs(s(y*4.));" +
   "v+=.125*abs(s(y*8.));" +
   "gl_FragColor=vec4(vec3(1.-v*.2),1.);" +
 "}"

var flowShader =
 "uniform float time,scale;\n" +
 "#define F2 0.366025403\n" +
 "#define G2 0.211324865\n" +
 "#define K 0.0243902439\n" +
 "float t(float y)" +
 "{" +
   "return mod((34.*y+1.)*y,289.);" +
 "}" +
 "vec2 t(vec2 y,float x)" +
 "{" +
   "{" +
     "float v=t(t(y.x)+y.y)*K+x;" +
     "v=4.*fract(v)-2.;" +
     "return vec2(abs(v)-1.,abs(abs(v+1.)-2.)-1.);" +
   "}" +
 "}" +
 "float t(in vec2 y,in float x,out vec2 v)" +
 "{" +
   "vec2 z=y+dot(y,vec2(F2)),d=floor(z),w=d-dot(d,vec2(G2)),s=y-w,o=s.x>s.y?vec2(1.,0.):vec2(0.,1.),C=s-o+G2,e=s-1.+2.*G2;" +
   "d=mod(d,289.);" +
   "vec3 f=max(.5-vec3(dot(s,s),dot(C,C),dot(e,e)),0.),m=f*f,S=m*m;" +
   "vec2 n=t(d,x),r=t(d+o,x),F=t(d+1.,x);" +
   "vec3 a=vec3(dot(n,s),dot(r,C),dot(F,e)),u=S*a,g=m*f*a,V=g*vec3(s.x,C.x,e.x),U=g*vec3(s.y,C.y,e.y);" +
   "v.x=-8.*(V.x+V.y+V.z);" +
   "v.y=-8.*(U.x+U.y+U.z);" +
   "v.x+=dot(S,vec3(n.x,r.x,F.x));" +
   "v.y+=dot(S,vec3(n.y,r.y,F.y));" +
   "v*=40.;" +
   "return 40.*(u.x+u.y+u.z);" +
 "}" +
 "void main()" +
 "{" +
   "vec2 y,x,d=gl_FragCoord.xy*(scale/125.);" +
   "float v=time*.4,s=t(d*.5,.2*v,y),C=t(d*2.+y*.5,.51*v,x),z=t(d*4.+y*.5+x*.25,.77*v,x),e=.9+(s+.75*C+.5*z)*.2;" +
   "gl_FragColor=vec4(vec3(e),1.);" +
 "}"

var worleyShader =
 "uniform float time,scale;" +
 "vec3 t(vec3 y)" +
 "{" +
   "return mod((34.*y+1.)*y,289.);" +
 "}" +
 "vec2 m(vec3 y)" +
 "{" +
   "\n#define K 0.142857142857\n" +
   "\n#define Ko 0.428571428571\n" +
   "\n#define K2 0.020408163265306\n" +
   "\n#define Kz 0.166666666667\n" +
   "\n#define Kzo 0.416666666667\n" +
   "\n#define jitter 1.0\n" +
   "vec3 v=mod(floor(y),289.),m=fract(y)-.5,f=m.x+vec3(1.,0.,-1.),d=m.y+vec3(1.,0.,-1.),s=m.z+vec3(1.,0.,-1.),x=t(v.x+vec3(-1.,0.,1.)),z=t(x+v.y-1.),C=t(x+v.y),e=t(x+v.y+1.),r=t(z+v.z-1.),F=t(z+v.z),S=t(z+v.z+1.),w=t(C+v.z-1.),o=t(C+v.z),u=t(C+v.z+1.),g=t(e+v.z-1.),V=t(e+v.z),U=t(e+v.z+1.),a=fract(r*K)-Ko,n=mod(floor(r*K),7.)*K-Ko,c=floor(r*K2)*Kz-Kzo,l=fract(F*K)-Ko,R=mod(floor(F*K),7.)*K-Ko,Q=floor(F*K2)*Kz-Kzo,O=fract(S*K)-Ko,W=mod(floor(S*K),7.)*K-Ko,T=floor(S*K2)*Kz-Kzo,i=fract(w*K)-Ko,Z=mod(floor(w*K),7.)*K-Ko,Y=floor(w*K2)*Kz-Kzo,X=fract(o*K)-Ko,p=mod(floor(o*K),7.)*K-Ko,b=floor(o*K2)*Kz-Kzo,P=fract(u*K)-Ko,G=mod(floor(u*K),7.)*K-Ko,j=floor(u*K2)*Kz-Kzo,q=fract(g*K)-Ko,N=mod(floor(g*K),7.)*K-Ko,M=floor(g*K2)*Kz-Kzo,L=fract(V*K)-Ko,J=mod(floor(V*K),7.)*K-Ko,I=floor(V*K2)*Kz-Kzo,H=fract(U*K)-Ko,E=mod(floor(U*K),7.)*K-Ko,D=floor(U*K2)*Kz-Kzo,B=f+jitter*a,A=d.x+jitter*n,k=s.x+jitter*c,h=f+jitter*l,ab=d.x+jitter*R,ac=s.y+jitter*Q,ad=f+jitter*O,ae=d.x+jitter*W,af=s.z+jitter*T,ag=f+jitter*i,ah=d.y+jitter*Z,ai=s.x+jitter*Y,aj=f+jitter*X,ak=d.y+jitter*p,al=s.y+jitter*b,am=f+jitter*P,an=d.y+jitter*G,ao=s.z+jitter*j,ap=f+jitter*q,aq=d.z+jitter*N,ar=s.x+jitter*M,as=f+jitter*L,at=d.z+jitter*J,au=s.y+jitter*I,av=f+jitter*H,aw=d.z+jitter*E,ax=s.z+jitter*D,ay=B*B+A*A+k*k,az=h*h+ab*ab+ac*ac,ba=ad*ad+ae*ae+af*af,bb=ag*ag+ah*ah+ai*ai,bc=aj*aj+ak*ak+al*al,bd=am*am+an*an+ao*ao,be=ap*ap+aq*aq+ar*ar,bf=as*as+at*at+au*au,bg=av*av+aw*aw+ax*ax;" +
   "{" +
     "vec3 bh=min(ay,az);" +
     "az=max(ay,az);" +
     "ay=min(bh,ba);" +
     "ba=max(bh,ba);" +
     "az=min(az,ba);" +
     "vec3 bi=min(bb,bc);" +
     "bc=max(bb,bc);" +
     "bb=min(bi,bd);" +
     "bd=max(bi,bd);" +
     "bc=min(bc,bd);" +
     "vec3 bj=min(be,bf);" +
     "bf=max(be,bf);" +
     "be=min(bj,bg);" +
     "bg=max(bj,bg);" +
     "bf=min(bf,bg);" +
     "vec3 bk=min(ay,bb);" +
     "bb=max(ay,bb);" +
     "ay=min(bk,be);" +
     "be=max(bk,be);" +
     "ay.xy=ay.x<ay.y?ay.xy:ay.yx;" +
     "ay.xz=ay.x<ay.z?ay.xz:ay.zx;" +
     "az=min(az,bb);" +
     "az=min(az,bc);" +
     "az=min(az,be);" +
     "az=min(az,bf);" +
     "ay.yz=min(ay.yz,az.xy);" +
     "ay.y=min(ay.y,az.z);" +
     "ay.y=min(ay.y,ay.z);" +
     "return sqrt(ay.xy);" +
   "}" +
 "}" +
 "void main()" +
 "{" +
   "vec2 a=vec2(scale/50.),b=gl_FragCoord.xy*a,d=m(vec3(b.x,b.y,time*.15));" +
   "float r=d.y-d.x;" +
   "vec3 y=vec3(1.-r*.2);" +
   "gl_FragColor=vec4(y,1.);" +
 "}"

var vertexShader =
 "void main()" +
 "{" +
   "gl_Position=vec4(position,1.);" +
 "}"

