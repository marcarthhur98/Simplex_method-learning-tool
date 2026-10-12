const assert=require('node:assert/strict'),E=require('./engine'),K=require('./advanced-engine');
for(const [a,b] of [['3+3M','3M+3'],[' − 1/2 M + 0.5 ','-1/2M+1/2'],['M+M-2M+3','3'],['1/2M+1/2','0.5+0.5M'],['2*M-3','-3+2M']])assert(K.m(a).eq(K.m(b)));
for(const value of ['M*M','M+','M++1','M/2','alert(1)','1e3M','M'.repeat(200)])assert.throws(()=>K.m(value));
assert.throws(()=>K.m('1/0M'));assert(E.q('−1/2').eq('-1/2'));
console.log('PASS: bounded exact expression parser, equivalent term orders, Unicode minus and invalid input rejection.');
