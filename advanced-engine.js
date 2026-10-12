(function(root){
 const E=root.Simplex||(typeof require!=='undefined'?require('./engine.js'):null),q=E.q;
 class M {
  constructor(m=0,c=0){this.m=q(m);this.c=q(c)}
  static parse(x){if(x instanceof M)return x;let s=String(x).replace(/[−–]/g,'-').replace(/\s/g,'').replace(/m/g,'M').replace(/\*(?=M)/g,'');if(s.length>160)throw Error('Use at most 160 characters.');if(!s.includes('M'))return new M(0,q(s));let pos=0,count=0,mm=q(0),cc=q(0);const token=/([+-]?)(?:(\d+(?:\.\d*)?|\.\d+)(?:\/(\d+))?)?(M)?/y;while(pos<s.length){if(++count>16)throw Error('Use at most 16 terms.');token.lastIndex=pos;const t=token.exec(s);if(!t||!t[0]||(!t[2]&&!t[4])||(pos>0&&!t[1]))throw Error('Cannot read this expression. Use 3M+3, 3+3M, or -1/2M.');let n=t[2]?q(t[2]):q(1);if(t[3])n=n.div(q(t[3]));if(t[1]==='-')n=n.neg();if(t[4])mm=mm.add(n);else cc=cc.add(n);pos=token.lastIndex}return new M(mm,cc)}
  add(x){x=M.parse(x);return new M(this.m.add(x.m),this.c.add(x.c))}
  sub(x){x=M.parse(x);return new M(this.m.sub(x.m),this.c.sub(x.c))}
  mul(x){x=M.parse(x);if(!this.m.eq(0)&&!x.m.eq(0))throw Error('M squared is not used in these tableau operations.');return new M(this.m.mul(x.c).add(this.c.mul(x.m)),this.c.mul(x.c))}
  div(x){x=M.parse(x);if(!x.m.eq(0))throw Error('Divide only by an ordinary pivot element.');return new M(this.m.div(x.c),this.c.div(x.c))}
  neg(){return new M(this.m.neg(),this.c.neg())}
  cmp(x){x=M.parse(x);return this.m.cmp(x.m)||this.c.cmp(x.c)}
  eq(x){return this.cmp(x)===0}
  toString(){if(this.m.eq(0))return String(this.c);const a=this.m.eq(1)?'':this.m.eq(-1)?'-':String(this.m);return a+'M'+(this.c.eq(0)?'':this.c.cmp(0)>0?'+'+this.c:String(this.c))}
  toJSON(){return this.toString()}
 }
 const m=x=>M.parse(x),mat=a=>a.map(r=>r.map(q)),I=n=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>q(i===j?1:0))),transpose=a=>a[0].map((_,j)=>a.map(r=>r[j]));
 function mul(a,b){return a.map(r=>transpose(b).map(c=>r.reduce((v,x,i)=>v.add(x.mul(c[i])),q(0))))}
 function inv(a){a=mat(a);const n=a.length,w=a.map((r,i)=>r.concat(I(n)[i]));for(let j=0;j<n;j++){const k=w.findIndex((r,i)=>i>=j&&!r[j].eq(0));if(k<0)throw Error('Singular basis.');[w[j],w[k]]=[w[k],w[j]];const p=w[j][j];w[j]=w[j].map(v=>v.div(p));for(let i=0;i<n;i++)if(i!==j){const f=w[i][j];w[i]=w[i].map((v,k)=>v.sub(f.mul(w[j][k])))}}return w.map(r=>r.slice(n))}
 function basis(A,b,c,indices){A=mat(A);const B=A.map(r=>indices.map(j=>r[j])),inverse=inv(B),xb=mul(inverse,mat(b.map(v=>[v]))).map(r=>r[0]),y=mul([indices.map(j=>q(c[j]))],inverse)[0],at=mul(inverse,A),row=transpose(A).map((a,j)=>a.reduce((v,x,i)=>v.add(y[i].mul(x)),q(0)).sub(c[j])),z=indices.reduce((v,j,i)=>v.add(q(c[j]).mul(xb[i])),q(0));return {B,inverse,xb,y,at,row,z}}
 function augment(p){const names=p.names?p.names.slice():p.c.map((_,i)=>'x'+(i+1)),roles=names.map(()=> 'decision'),rows=p.A.map(r=>r.map(q)),b=p.b.map(q),relations=p.relations.slice(),basis=[];
  for(let i=0;i<rows.length;i++){if(b[i].cmp(0)<0){b[i]=b[i].neg();rows[i]=rows[i].map(v=>v.neg());relations[i]=relations[i]==='<='?'>=':relations[i]==='>='?'<=':'='}}
  const append=(i,name,role,value)=>{names.push(name);roles.push(role);rows.forEach((r,k)=>r.push(q(k===i?value:0)));return names.length-1};
  for(let i=0;i<rows.length;i++){if(relations[i]==='<=')basis[i]=append(i,'s'+(i+1),'slack',1);else{if(relations[i]==='>=')append(i,'e'+(i+1),'surplus',-1);basis[i]=append(i,'a'+(i+1),'artificial',1)}}
  return {names,roles,rows,b,basis}
 }
 function start(p,method){const a=augment(p),sense=method==='two'?'min':p.sense;let c=a.names.map((_,j)=>j<p.c.length?m(p.c[j]):m(0));if(method==='two')c=a.roles.map(role=>m(role==='artificial'?1:0));else if(method==='big')c=c.map((v,j)=>a.roles[j]==='artificial'?new M(p.sense==='min'?1:-1,0):v);const raw=[c.map(v=>v.neg()).concat(m(0)),...a.rows.map((r,i)=>r.map(m).concat(m(a.b[i])))];return {names:a.names,roles:a.roles,basis:a.basis,t:raw,c,sense,phase:method==='two'?'I':'Original',method,canonical:false}}
 function canonical(s){const out=decode(encode(s));out.basis.forEach((j,i)=>{const f=out.t[0][j];out.t[0]=out.t[0].map((v,k)=>v.sub(f.mul(out.t[i+1][k])))});out.canonical=true;return out}
 function nonbasic(s){return s.names.map((_,j)=>j).filter(j=>!s.basis.includes(j))}
 function improving(s){return nonbasic(s).filter(j=>s.sense==='max'?s.t[0][j].cmp(0)<0:s.t[0][j].cmp(0)>0)}
 function ratios(s,j){const values=s.t.slice(1).map(r=>r[j].cmp(0)>0?r.at(-1).div(r[j]):null);let min=null;for(const v of values)if(v!==null&&(min===null||v.cmp(min)<0))min=v;return {values,min,rows:values.flatMap((v,i)=>v!==null&&v.eq(min)?[i+1]:[])}}
 function pivot(s,r,j,cleanup=false){if(!nonbasic(s).includes(j))throw Error('Enter a nonbasic variable.');if(!cleanup&&!ratios(s,j).rows.includes(r))throw Error('Use a minimum eligible ratio row.');const out=decode(encode(s)),p=out.t[r][j];if(!p.m.eq(0)||p.eq(0))throw Error('Nonzero ordinary pivot required.');out.t[r]=out.t[r].map(v=>v.div(p));out.t=out.t.map((row,i)=>i===r?row:row.map((v,k)=>v.sub(s.t[i][j].mul(out.t[r][k]))));out.basis[r-1]=j;return out}
 function values(s){const x=s.names.map(()=>m(0));s.basis.forEach((j,i)=>x[j]=s.t[i+1].at(-1));return x}
 function artificialSum(s){return values(s).reduce((v,x,j)=>s.roles[j]==='artificial'?v.add(x):v,m(0))}
 function outcome(s){if(!s.canonical)return 'canonicalise';if(improving(s).length)return 'continue';if(s.phase==='I')return artificialSum(s).cmp(0)>0?'infeasible':'transition';if(artificialSum(s).cmp(0)>0)return 'infeasible';return 'optimal'}
 function cleanupTask(s){for(let i=0;i<s.basis.length;i++)if(s.roles[s.basis[i]]==='artificial'){if(!s.t[i+1].at(-1).eq(0))throw Error('Positive artificial cannot be removed.');const j=s.names.findIndex((_,j)=>s.roles[j]!=='artificial'&&!s.t[i+1][j].eq(0));return {row:i+1,column:j,kind:j<0?'redundant':'pivot'}}return null}
 function transition(s,p){if(outcome(s)!=='transition')throw Error('Phase I must reach zero artificial sum first.');if(cleanupTask(s))throw Error('Clean up basic artificials first.');const keep=s.names.map((_,j)=>j).filter(j=>s.roles[j]!=='artificial'),out=decode(encode(s));out.names=keep.map(j=>s.names[j]);out.roles=keep.map(j=>s.roles[j]);out.basis=s.basis.map(j=>keep.indexOf(j));out.t=s.t.map(r=>keep.map(j=>r[j]).concat(r.at(-1)));out.sense=p.sense;out.phase='II';out.c=out.names.map((name,j)=>out.roles[j]==='decision'?m(p.c[(p.names||p.c.map((_,i)=>'x'+(i+1))).indexOf(name)]):m(0));out.t[0]=out.c.map(v=>v.neg()).concat(m(0));out.canonical=false;return out}
 function removeRedundant(s,r){const out=decode(encode(s));out.t.splice(r,1);out.basis.splice(r-1,1);return out}
 function encode(s){return {...s,t:s.t.map(r=>r.map(String)),c:s.c.map(String)}}
 function decode(s){return {...s,names:s.names.slice(),roles:s.roles.slice(),basis:s.basis.slice(),t:s.t.map(r=>r.map(m)),c:s.c.map(m)}}
 const api={M,m,mat,I,transpose,mul,inv,basis,augment,start,canonical,nonbasic,improving,ratios,pivot,values,artificialSum,outcome,cleanupTask,transition,removeRedundant,encode,decode};root.AdvancedEngine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
