(function(root){
 'use strict';
 const gcd=(a,b)=>{a=a<0n?-a:a;b=b<0n?-b:b;while(b){[a,b]=[b,a%b]}return a||1n};
 class Q {
  constructor(n,d=1n){n=BigInt(n);d=BigInt(d);if(!d)throw Error('A denominator cannot be zero.');if(d<0n){n=-n;d=-d}const g=gcd(n,d);this.n=n/g;this.d=d/g;Object.freeze(this)}
  static parse(v){if(v instanceof Q)return v;let s=String(v).replace(/[−–]/g,'-').trim();if(s.length>160)throw Error('Use at most 160 characters.');if(/^[+-]?\d+\s*\/\s*[+-]?\d+$/.test(s)){const [n,d]=s.split('/').map(x=>x.trim());return new Q(n,d)}if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))throw Error('Enter an integer, decimal, or fraction such as -3/2.');let sign=1n;if(s[0]==='-'){sign=-1n;s=s.slice(1)}else if(s[0]==='+')s=s.slice(1);const [a,b='']=s.split('.');return new Q(sign*BigInt((a||'0')+b),10n**BigInt(b.length))}
  add(v){v=Q.parse(v);return new Q(this.n*v.d+v.n*this.d,this.d*v.d)}
  sub(v){v=Q.parse(v);return new Q(this.n*v.d-v.n*this.d,this.d*v.d)}
  mul(v){v=Q.parse(v);return new Q(this.n*v.n,this.d*v.d)}
  div(v){v=Q.parse(v);return new Q(this.n*v.d,this.d*v.n)}
  neg(){return new Q(-this.n,this.d)}
  cmp(v){v=Q.parse(v);const d=this.n*v.d-v.n*this.d;return d<0n?-1:d>0n?1:0}
  eq(v){return this.cmp(v)===0}
  toString(){return this.d===1n?String(this.n):`${this.n}/${this.d}`}
  toJSON(){return this.toString()}
 }
 const q=v=>Q.parse(v),clone=s=>({t:s.t.map(r=>r.slice()),basis:s.basis.slice()}),nb=s=>s.t[0].slice(0,-1).map((_,j)=>j).filter(j=>!s.basis.includes(j));
 function initial(p){const n=p.c.length,m=p.A.length;return {t:[p.c.map(v=>q(v).neg()).concat(Array.from({length:m},()=>q(0)),q(0)),...p.A.map((r,i)=>r.map(q).concat(Array.from({length:m},(_,j)=>q(i===j?1:0)),q(p.b[i])))],basis:Array.from({length:m},(_,i)=>n+i)}}
 function ratios(s,j){const last=s.t[0].length-1;const values=s.t.slice(1).map(r=>r[j].cmp(0)>0?r[last].div(r[j]):null);let min=null;for(const v of values)if(v!==null&&(min===null||v.cmp(min)<0))min=v;return {values,min,rows:values.flatMap((v,i)=>v!==null&&v.eq(min)?[i+1]:[])}}
 function status(s){if(s.t.slice(1).some(r=>r.at(-1).cmp(0)<0))return 'infeasible-basis';return nb(s).some(j=>s.t[0][j].cmp(0)<0)?'improving':'optimal'}
 function pivot(s,r,j){if(!nb(s).includes(j))throw Error('Choose a nonbasic entering variable.');if(!ratios(s,j).rows.includes(r))throw Error('Choose a row tied for the minimum eligible ratio.');const out=clone(s),p=out.t[r][j];out.t[r]=out.t[r].map(v=>v.div(p));out.t=out.t.map((row,i)=>i===r?row:row.map((v,k)=>v.sub(s.t[i][j].mul(out.t[r][k]))));out.basis[r-1]=j;return out}
 function values(s){const x=s.t[0].slice(0,-1).map(()=>q(0));s.basis.forEach((j,i)=>x[j]=s.t[i+1].at(-1));return x}
 function encode(s){return {t:s.t.map(r=>r.map(String)),basis:s.basis.slice()}}
 function decode(s){return {t:s.t.map(r=>r.map(q)),basis:s.basis.slice()}}
 function checkTableau(raw,expected){for(let i=0;i<expected.t.length;i++)for(let j=0;j<expected.t[i].length;j++){let v;try{v=q(raw[i]?.[j]??'')}catch(e){return {ok:false,row:i,col:j,message:e.message}}if(!v.eq(expected.t[i][j]))return {ok:false,row:i,col:j,message:`Recheck row ${i}, ${j===expected.t[i].length-1?'RHS':`column ${j+1}`}.`}}return {ok:true}}
 // Explore the finite graph of optimal bases; zero-length pivots cannot alone prove uniqueness.
 function alternatives(s){if(status(s)!=='optimal')return {kind:'not-optimal'};const start=values(s),queue=[s],seen=new Set();while(queue.length){const cur=queue.shift(),key=cur.basis.join(',');if(seen.has(key))continue;seen.add(key);for(const j of nb(cur).filter(j=>cur.t[0][j].eq(0))){const info=ratios(cur,j);if(info.min===null)return {kind:'ray',column:j,state:cur};for(const r of info.rows){const next=pivot(cur,r,j);if(values(next).some((v,k)=>!v.eq(start[k])))return {kind:'distinct',column:j,row:r,state:cur,next};if(!seen.has(next.basis.join(',')))queue.push(next)}}}return {kind:'unique',bases:seen.size}}
 function isCanonical(s){return s.basis.every((j,i)=>s.t.every((row,r)=>row[j].eq(r===i+1?1:0)))}
 const api={Q,q,clone,nb,initial,ratios,status,pivot,values,encode,decode,checkTableau,alternatives,isCanonical};root.Simplex=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
