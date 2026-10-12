(function(root){
 const sources={
  tableau:{file:'2.2 - Simplex Tableau.pdf',locator:'PDF pp. 8–12, 23'},
  basis:{file:'Simplex Tableau review.pptx',locator:'slides 2–3, 6'},
  signs:{file:'Simplex Tableau review.pptx',locator:'slides 4–5'},
  ratio:{file:'Simplex Tableau review.pptx',locator:'slides 7–8'},
  degenerate:{file:'Simplex Tableau review.pptx',locator:'slide 9'},
  alternative:{file:'Simplex Tableau review.pptx',locator:'slide 10'},
  unbounded:{file:'3.1 - Special Simplex Cases.pdf',locator:'PDF pp. 3–6'},
  interpret:{file:'1.3 - Linear Programming - blanks filled.pdf',locator:'PDF pp. 12, 26'}
 };
 const common={A:[[3,'3/2'],[1,'3/2']],b:[42,24]};
 const problems=[
  {id:'baking',title:'01 · Baking baseline',tag:'Standard simplex',c:[48,36],...common,source:{file:'2.2 - Simplex Tableau.pdf',locator:'PDF pp. 8–22'},description:'Choose batches of cookies (x1) and cupcakes (x2) to maximise bake-sale revenue. Flour and sugar limit production.',adaptation:'Original lecture coefficients and constraints. The exercise begins from the supplied slack-basis tableau.',resources:['Flour (cups)','Sugar (cups)'],expected:{status:'optimal',z:'792',point:['9','10']}},
  {id:'tie',title:'02 · Baking with a cookie cap',tag:'Ties and degeneracy',c:[48,36],A:[...common.A,[1,0]],b:[42,24,14],source:{file:'3.1 - Special Simplex Cases.pdf',locator:'PDF pp. 9–15'},description:'The baking model includes a cap of 14 cookie batches. Explore either leaving choice in a tied ratio test.',adaptation:'Original lecture model. Both tied leaving rows are accepted; the sequence depends on your choices.',resources:['Flour (cups)','Sugar (cups)','Cookie cap (batches)'],expected:{status:'optimal',z:'792',point:['9','10']}},
  {id:'alternative',title:'03 · Baking with changed prices',tag:'Alternative optima',c:[24,36],...common,source:{file:'3.1 - Special Simplex Cases.pdf',locator:'PDF pp. 16–20'},description:'Cookie-batch revenue is now 24; cupcake-batch revenue remains 36. After finding an optimum, investigate a zero-cost pivot.',adaptation:'Original changed-price lecture model. No coefficients or constraints changed.',resources:['Flour (cups)','Sugar (cups)'],expected:{status:'optimal',z:'576',point:['0','16']}},
  {id:'optimal-degenerate',title:'04 · Baking with a cupcake cap',tag:'Optimal degeneracy',c:[24,36],A:[...common.A,[0,1]],b:[42,24,10],source:{file:'3.1 - Special Simplex Cases.pdf',locator:'PDF pp. 21–27'},description:'The changed-price model limits cupcake batches to 10. Distinguish a different optimal basis from a different optimal point.',adaptation:'Original lecture model. Zero-cost basis exploration is available after the first optimum.',resources:['Flour (cups)','Sugar (cups)','Cupcake cap (batches)'],expected:{status:'optimal',z:'576',point:['9','10']}},
  {id:'unbounded',title:'05 · Baking without resource limits',tag:'Unboundedness',c:[48,36],A:[[1,0]],b:[15],source:sources.unbounded,description:'Only the cap of 15 cookie batches remains. Flour and sugar constraints have been removed in this lecture scenario.',adaptation:'Original special-case lecture model. No additional constraints imposed.',resources:['Cookie cap (batches)'],expected:{status:'unbounded'}}
 ];
 const definitions=[
  ['Basis','The chosen basic variables whose columns form the identity block in a canonical tableau. A pivot exchanges one basic variable for one nonbasic variable.','At the start of the baseline exercise, the basis is s1, s2.',sources.basis],
  ['Basic feasible solution','Set nonbasic variables to zero and read basic values from the RHS. It is feasible when the resulting values satisfy the constraints and nonnegativity.','In the initial baseline tableau: x1=x2=0, s1=42, s2=24.',sources.basis],
  ['Slack variable','Represents the unused amount in a ≤ constraint after adding it to make an equality.','3x1 + 3x2/2 + s1 = 42: s1 is unused flour.',{file:'2 - Simplex Method - blanks filled.pdf',locator:'PDF pp. 22–23'}],
  ['Row-0 coefficient','Its negative is the change in Z per unit increase of that nonbasic variable while holding the other nonbasic variables at zero.','Row 0 starts with −48 under x1, so increasing x1 improves Z at rate 48.',sources.signs],
  ['Ratio test','For a chosen entering column, divide the RHS by each strictly positive constraint-row coefficient. Use the smallest eligible ratio, including zero.','For x1 in the baseline: 42/3=14 and 24/1=24, so s1 leaves.',sources.ratio],
  ['Pivot','Normalise the pivot row, then eliminate the entering column from every other row, including row 0.','For the first baseline pivot, divide the s1 row by 3.',sources.tableau],
  ['Degeneracy','A BFS is degenerate if at least one basic variable is zero. A zero-step pivot changes the basis but leaves the point unchanged.','With the cookie cap, the first x1 step has tied ratios of 14.',sources.degenerate],
  ['Alternative optimum','A different feasible point with the same optimal objective. A zero-cost pivot with a positive step gives evidence of a distinct optimum.','In changed-price baking, (0,16) and (9,10) both give Z=576.',sources.alternative],
  ['Unbounded objective','An improving entering variable can grow indefinitely when its column has no positive constraint entry to restrict it.','Without flour and sugar limits, x2 can grow indefinitely.',sources.unbounded],
  ['Optimality test','For a feasible maximisation tableau, nonnegative nonbasic row-0 coefficients mean no improving entering direction remains.','The baseline final row has 12 under each slack and Z=792.',sources.tableau],
  ['Cycling','The simplex method revisits a previously visited basis. Degenerate pivots can make this possible.','The lab flags a repeated basis in your history; choose another valid path.',{file:'3.1 - Special Simplex Cases.pdf',locator:'PDF p. 8'}]
 ];
 const api={sources,problems,definitions};root.LabContent=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
