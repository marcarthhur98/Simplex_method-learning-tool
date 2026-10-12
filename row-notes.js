(()=>{
const $=id=>document.getElementById(id),adv=!!$('activities'),container=$(adv?'activities':'task'),storage='mie262-row-notes-v1:'+location.pathname+location.search;let saved={};try{saved=JSON.parse(localStorage.getItem(storage)||'{}')}catch{}
function key(el){return JSON.stringify([adv?[$('topic').value,$('example').value,$('practice').value,$('checkpoint').value]:[$('problem').value,$('mode').value,$('drill').value],$(adv?'working':'current-tableau').textContent,el.getAttribute('aria-label')])}
function restore(){container.querySelectorAll('.row-operation').forEach(el=>{if(!el.value)el.value=saved[key(el)]||''})}
container.addEventListener('input',e=>{if(!e.target.matches('.row-operation'))return;saved[key(e.target)]=e.target.value;try{localStorage.setItem(storage,JSON.stringify(saved))}catch{}});
new MutationObserver(restore).observe(container,{childList:true,subtree:true});$(adv?'reset-advanced':'restart').addEventListener('click',()=>{saved={};try{localStorage.removeItem(storage)}catch{}container.querySelectorAll('.row-operation').forEach(el=>el.value='')});restore();
})();
