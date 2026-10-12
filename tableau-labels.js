(()=>{
function label(){document.querySelectorAll('.workspace table').forEach(table=>{const headers=[...table.querySelectorAll('thead tr:first-child th')].map(e=>e.textContent.trim());table.querySelectorAll('tbody tr').forEach(row=>[...row.children].forEach((cell,j)=>{if(cell.tagName==='TD')cell.dataset.columnLabel=headers[j]||('Entry '+j)}))})}
new MutationObserver(label).observe(document.querySelector('.workspace'),{childList:true,subtree:true});label();
})();
