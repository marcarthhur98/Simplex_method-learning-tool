# Visualisation Playground source catalogue

Uses the established catalogue; no new textbook passage search was performed. Existing textbook exercise source references preserve both printed and PDF page numbers in TEXTBOOK-SOURCES.md. References below use PDF page numbers unless explicitly marked slides.

| View / concept | Uploaded source | Locator |
|---|---|---|
| Feasible sets, constraints, objective contours | 1.3 - Linear Programming - blanks filled.pdf | PDF pp. 2–22 |
| Ratio eligibility, ties, degeneracy | Simplex Tableau review.pptx | slides 7–9 |
| Artificial variables and feasibility distinction | 3.2 - Non-standard LPs.pdf | PDF pp. 18–39 |
| Movement/overshoot interaction inspiration | simplex_pivot_explorer_nonbasic_highlighting.py | _theta_submitted, _maximum_submitted, _pivot, approximately lines 200–315 |
| Objective contour interaction inspiration | yard_work_sensitivity_explorer.py | module documentation and objective/RHS exploration functions |
| Original versus augmented feasibility | OR_Big_M_Two_Phase_Two_LP_Demo.py | soup demonstration and build_region_steps, lines 261–388 |

Every displayed model inherits its existing exercise source and adaptation note. Drawings do not change model coefficients. Vector projections are implementation displays, not added educational examples. Python interactions were adapted into browser code; Python is not required to run the lab. Exact rational basis calculations are reconstructed from the uploaded model and selected accepted tableau, and checked against its constraint entries. Artificial coefficients remain symbolic in accepted objective rows; no finite numerical M is substituted.

Lecture convention is retained: objective row uses Z + reduced-row coefficients × variables = current objective. The pivot preview reports changes in the original objective; Phase I artificial totals are identified separately. A region being unbounded does not by itself establish an unbounded objective. Original feasible recession and improving objective evidence are checked before making that conclusion in a movement preview.

Architecture: playground-engine.js contains exact model/basis/geometry operations; playground.js contains read-only session adapters and separate view renderers. No playground exploration is saved to LabSessions. Later specialised views can reuse the context and exact functions without changing grading.

Tableau and simultaneous-equation update: duality and sensitivity use original slack-column readings, scalar binding equations, feasibility checks and objective equality. The playground offers Graph, Pivot explorer and Tableau / equations. No additional textbook search was needed: the existing contents/index locators were reused. Lecture 3.3 PDF pp. 12–15, 22–30; textbook §6.5 printed pp. 295–301 / PDF pp. 311–317 and §6.10 printed pp. 325–328 / PDF pp. 341–344. RHS exercises adapt §6.3 printed pp. 275–287 / PDF pp. 291–303. Original model coefficients are unchanged.
