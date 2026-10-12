const assert=require('node:assert/strict');
const E=require('./engine'),K=require('./advanced-engine'),C=require('./advanced-content');
const q=E.q;
assert.equal(String(K.m('1/2M+3/2').sub('M-1')),'-1/2M+5/2');
assert(K.m('M-100000').cmp(999999)>0);assert.throws(()=>K.m('M').mul('M'));
let states=0,edges=0,cleanups=0;
for(const p of C.models)for(const method of ['big','two']){
 const queue=[K.canonical(K.start(p,method))],seen=new Set();let ends=0;
 while(queue.length){const s=queue.shift(),key=s.phase+':'+s.basis.join(',');if(seen.has(key))continue;seen.add(key);states++;
 assert(s.basis.every((j,i)=>s.t.every((r,k)=>r[j].eq(k===i+1?1:0))));
 assert(s.t.slice(1).every(r=>r.at(-1).cmp(0)>=0));
 const x=K.values(s),aug=K.augment(p); // Verify original augmented equations independently.
 if(s.names.length===aug.names.length)aug.rows.forEach((row,i)=>assert(row.reduce((v,a,j)=>v.add(K.m(a).mul(x[j])),K.m(0)).eq(aug.b[i])));
 const out=K.outcome(s);
 if(out==='transition') {const cl=K.cleanupTask(s);if(cl){cleanups++;if(cl.kind==='pivot')for(const j of K.nonbasic(s).filter(j=>s.roles[j]!=='artificial'&&!s.t[cl.row][j].eq(0)))queue.push(K.pivot(s,cl.row,j,true));else queue.push(K.removeRedundant(s,cl.row));}else queue.push(K.canonical(K.transition(s,p)));continue}
 if(out==='infeasible'){assert.equal(p.expected,'infeasible');assert(K.artificialSum(s).cmp(0)>0);ends++;continue}
 if(out==='optimal'){assert.notEqual(p.expected,'infeasible');assert(s.t[0].at(-1).eq(p.expected));assert(K.artificialSum(s).eq(0));p.A.forEach((row,i)=>{const a=row.reduce((v,k,j)=>v.add(q(k).mul(x[j].c)),q(0)),b=q(p.b[i]);assert(p.relations[i]==='='?a.eq(b):p.relations[i]==='<='?a.cmp(b)<=0:a.cmp(b)>=0)});ends++;continue}
 for(const j of K.improving(s)){const r=K.ratios(s,j);assert(r.min!==null);for(const i of r.rows){edges++;queue.push(K.pivot(s,i,j))}}
 }
 assert(ends>0);console.log(p.id+' '+method+': '+seen.size+' bases verified');
}
const L=C.landscape;
for(const ids of [[2,3,4,5],[2,1,4,5],[0,1,4,5]]){const b=K.basis(L.A,L.b,L.c,ids);assert.deepEqual(K.mul(b.inverse,b.B).map(r=>r.map(String)),K.I(4).map(r=>r.map(String)));assert(b.xb.every(v=>v.cmp(0)>=0));assert(b.row.filter((_,j)=>ids.includes(j)).every(v=>v.eq(0)))}
const opt=K.basis(L.A,L.b,L.c,[0,1,4,5]);assert.deepEqual(opt.xb.map(String),['8','14','12','5']);assert.deepEqual(opt.y.map(String),['40','10','0','0']);assert.equal(String(opt.z),'2080');
const queue=[[2,3,4,5]],seen=new Set();let updates=0;while(queue.length){const ids=queue.shift();if(seen.has(ids.join(',')))continue;seen.add(ids.join(','));const d=K.basis(L.A,L.b,L.c,ids);for(let j=0;j<L.c.length;j++)if(!ids.includes(j)&&d.row[j].cmp(0)<0){const col=d.at.map(r=>r[j]),rs=col.map((v,i)=>v.cmp(0)>0?d.xb[i].div(v):null),minimum=rs.filter(v=>v!==null).reduce((a,b)=>a.cmp(b)<0?a:b);for(let r=0;r<4;r++)if(rs[r]!==null&&rs[r].eq(minimum)){const next=ids.slice();next[r]=j;const eta=K.I(4);for(let i=0;i<4;i++)eta[i][r]=i===r?q(1).div(col[r]):col[i].neg().div(col[r]);assert.deepEqual(K.mul(eta,d.inverse).map(r=>r.map(String)),K.basis(L.A,L.b,L.c,next).inverse.map(r=>r.map(String)));updates++;queue.push(next)}}}console.log(`${updates} revised inverse updates verified across ${seen.size} bases.`);
assert.deepEqual(K.mul(opt.inverse,[[37],[64],[20],[19]]).map(r=>String(r[0])),['10','27/2','10','11/2']);
for(const f of [C.transformations,C.dualTasks,C.sensitivityTasks])for(const id of ['forest','mixed','free','construct','basis','weak','rhs','activity']){const ts=f(id);assert(ts.every(t=>t.source.file&&t.source.locator&&t.hint&&t.explain));}
console.log(`${states} exact bases, ${edges} valid pivots, ${cleanups} cleanup contexts verified.`);
