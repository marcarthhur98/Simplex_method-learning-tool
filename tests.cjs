const assert=require('node:assert/strict');
const E=require('./engine.js'),C=require('./content.js');
const {q}=E;
assert.equal(q('0.125').toString(),'1/8');assert.equal(q('-2/-4').toString(),'1/2');assert.equal(q('1.5').toString(),'3/2');assert.throws(()=>q('1/0'));assert.throws(()=>q('NaN'));assert.throws(()=>q('1e3'));
function verify(p,s){assert(E.isCanonical(s));const x=E.values(s);p.A.forEach((row,i)=>{const lhs=row.reduce((a,v,j)=>a.add(q(v).mul(x[j])),q(0)).add(x[2+i]);assert(lhs.eq(p.b[i]))});const z=p.c.reduce((a,v,j)=>a.add(q(v).mul(x[j])),q(0));assert(z.eq(s.t[0].at(-1)));assert(s.t.slice(1).every(r=>r.at(-1).cmp(0)>=0));}
let states=0,edges=0;
// Exhaust every improving entering choice and tied leaving choice, not just one stored path.
for(const p of C.problems){const queue=[E.initial(p)],seen=new Set(),ends=[];while(queue.length){const s=queue.shift(),key=s.basis.join(',');if(seen.has(key))continue;seen.add(key);states++;verify(p,s);if(E.status(s)==='optimal'){ends.push(s);assert(s.t[0].at(-1).eq(p.expected.z));continue}for(const j of E.nb(s).filter(j=>s.t[0][j].cmp(0)<0)){const ri=E.ratios(s,j);if(ri.min===null){assert.equal(p.expected.status,'unbounded');continue}for(const r of ri.rows){const next=E.pivot(s,r,j);edges++;assert(next.t[0].at(-1).cmp(s.t[0].at(-1))>=0);verify(p,next);queue.push(next)}}}
 if(p.expected.status==='optimal')assert(ends.length>0);else assert.equal(ends.length,0);
 console.log(`${p.id}: ${seen.size} feasible bases checked`);
}
let p=C.problems[0],s=E.initial(p);s=E.pivot(s,1,0);assert.equal(s.t[1][1].toString(),'1/2');s=E.pivot(s,2,1);assert.deepEqual(E.values(s).map(String),['9','10','0','0']);assert.equal(E.alternatives(s).kind,'unique');assert.equal(E.checkTableau(E.encode(s).t,s).ok,true);let wrong=E.encode(s).t;wrong[1][0]='2';assert.equal(E.checkTableau(wrong,s).ok,false);
p=C.problems[1];s=E.initial(p);assert.deepEqual(E.ratios(s,0).rows,[1,3]);s=E.pivot(s,3,0);assert.equal(E.ratios(s,1).min.toString(),'0');const next=E.pivot(s,1,1);assert.deepEqual(E.values(next).map(String),E.values(s).map(String));assert.notDeepEqual(next.basis,s.basis);
p=C.problems[2];s=E.pivot(E.initial(p),2,1);assert.equal(E.alternatives(s).kind,'distinct');s=E.pivot(s,1,0);assert.deepEqual(E.values(s).slice(0,2).map(String),['9','10']);assert.equal(s.t[0].at(-1).toString(),'576');
p=C.problems[3];s=E.pivot(E.initial(p),3,1);s=E.pivot(s,2,0);assert.equal(E.alternatives(s).kind,'unique');assert.equal(E.alternatives(s).bases,2);
p=C.problems[4];s=E.initial(p);assert.equal(E.ratios(s,1).min,null);assert(s.t[0][1].cmp(0)<0);assert.throws(()=>E.pivot(s,1,1));
console.log(`PASS: ${states} basis states and ${edges} improving pivots; exact arithmetic, zero-step pivots, alternative optima and unbounded evidence.`);
