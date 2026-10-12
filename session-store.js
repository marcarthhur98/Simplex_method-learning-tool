(function(root){
'use strict';const key='mie262-sessions-v2';let db={version:2,sessions:{}};try{const x=JSON.parse(localStorage.getItem(key));if(x?.version===2)db=x}catch{}
const copy=x=>JSON.parse(JSON.stringify(x));
function sync(){try{const x=JSON.parse(localStorage.getItem(key));if(x?.version===2)db=x}catch{}}
const api={get(id){sync();return db.sessions[id]?copy(db.sessions[id]):null},put(id,value){sync();db.sessions[id]=copy(value);try{localStorage.setItem(key,JSON.stringify(db));return true}catch{return false}},remove(id){sync();delete db.sessions[id];try{localStorage.setItem(key,JSON.stringify(db))}catch{}},all(){sync();return copy(db.sessions)},copy};root.LabSessions=api;
})(globalThis);
