# Extended practice source catalogue

Only the uploaded course materials supply educational content. References below use one-based PDF viewer pages. The textbook locator separately gives its printed page. Existing foundation catalogue: `../MIE262-foundation.md`.

| Practice | Uploaded source and locator | Use / adaptation |
|---|---|---|
| Minimisation transformation | 3.2 - Non-standard LPs.pdf, PDF pp. 4–12 | Original forest model; negate objective and recover its original sign |
| Mixed constraints and soup | Same file, PDF pp. 13–39 | Original model, 100 ml soup / 100 g salad units; augment, canonicalise, pivot, interpret |
| Negative RHS | Operational-Research-Winston-Wayne.pdf, §4.12, printed p. 173 / PDF p. 189 | Equivalent negative rewrite of the supplied soup protein constraint, explicitly identified |
| Free-variable split | 3.2 - Non-standard LPs.pdf, PDF pp. 40–47 | Original electricity model and net-transfer interpretation |
| Symbolic Big M | Same file, PDF pp. 18–23; OR_Big_M_Two_Phase_Two_LP_Demo.py, MValue/pivot lines 39–106 | Exact affine-M arithmetic adapted to JavaScript; no numerical-M approximation |
| Phase I/II | Same lecture, PDF pp. 24–39; uploaded Big M Python build_region_steps, lines 261–388 | Original region model; Phase I feasible point does not finish the original optimisation |
| Zero basic artificial cleanup | Same lecture, PDF p. 25; region Python above | Labelled adaptation adds x1+x2=4 to the region. Feasible set changes. Valid non-artificial cleanup pivots accepted |
| Infeasible model | 1.3 - Linear Programming - blanks filled.pdf, PDF pp. 13–14 | Lecture cupcake minimum x2≥17 combined with baking resource bounds; artificial-variable presentation |
| Ratio and degeneracy evidence | Simplex Tableau review.pptx, slides 7–9 | Strictly positive pivot-column eligibility, zero ratio, tied minima and basic zeros |
| Matrix form | 4.1 - Tableau in Matrix Form.pdf, PDF pp. 7–17 | Landscaping B, inverse, xB, y and row-0 reconstruction |
| Revised simplex | 4.2 -Revised Simplex.pdf, PDF pp. 3–24; inverse update pp. 13–15 | Same landscaping model; direction, ratios, eta/update matrix and repeated basis updates |
| Dual construction / bounds | 3.3 - Introduction to Sensitivity and Duality.pdf, PDF pp. 22–30 | Landscaping dual; weak-duality interpretation |
| Feasible-pair example | primal_dual_explorer.py, initial points in __init__, status routines lines 316–325 | Original default baking x=(6,4), y=(15,10); exact recalculation of slacks, gap and products |
| Dual certificates / complementarity | 4.3 -Duality and Sensitivity Revisted.pdf, PDF pp. 3–13, 24 | Both feasibilities required; basis-derived objective equality alone is insufficient |
| Sensitivity | Same file, PDF pp. 14–21, 25; yard_work_sensitivity_explorer.py inspected | Landscaping hours range, endpoint degeneracy, shadow price and hedge-activity calculations |
| Phase I notation difference | MIE262-Tutorial 3.pdf, PDF pp. 19–30 | Tutorial maximises the negative artificial sum; lecture/lab minimise the positive sum. Sense and equation are explicitly shown |

The textbook contents and index were consulted again before locating the RHS-normalisation passage. Other textbook definitions reuse the established catalogue. No repeated whole-book topic search or web educational sources were used.

## Conventions and boundaries

Row 0 uses cBᵀB⁻¹A−cᵀ. A negative nonbasic coefficient improves a max objective; a positive one improves a min objective. A min tableau stops with nonpositive coefficients; max stops with nonnegative coefficients. This is the lecture convention; the glossary flags the textbook's opposite reduced-cost sign. Basic row-0 coefficients must first be eliminated. Ratio eligibility requires a strictly positive transformed entry; zero ratios and tied minima are accepted.

Big M penalises artificials with +M for minimisation and −M for maximisation. A completed optimum with positive artificial sum proves original infeasibility. Phase I minimises the artificial sum; zero permits original feasibility, followed by cleanup and restoration of Z. The tutorial's negative-sum maximisation is labelled in the definitions.

The Python soup graph's unit labels are corrected to the lecture's 100 ml/100 g units. Python surplus names s1/s2 become e1/e2 in the lab, preserving the role and coefficients. The exact M calculation design is adapted, while fixed stored paths are replaced with basis-dependent grading. Other Python floating-point status calculations inform examples but do not supply approximate grading.

Sensitivity practice is limited to the uploaded landscaping RHS and nonbasic-activity examples. General free-form LP input, unrestricted sensitivity topics and dual-simplex algorithms are not implemented. Row-removal handling exists, but the current cleanup exercise demonstrates a zero-artificial pivot rather than a pure redundant-row removal. No unsupported example was added to fill that gap.

## Textbook expansion

See TEXTBOOK-SOURCES.md for the new 22-model bank, minimum five-problem coverage per topic, printed/PDF page references, method adaptations and verification. This extends the earlier single-example sensitivity boundary to five source-model single-RHS calculations using the uploaded textbook's §6.3 formulas. Definitions and lecture conventions remain unchanged.

## Dual simplex learning sequence — 2026-10-12

A separate Formulate & solve the dual topic now derives the dual from existing source-bank primal data, then uses two-phase simplex on the dual itself. This is ordinary simplex applied to the dual LP, not the distinct dual-simplex algorithm. It preserves y variable names throughout both phases. Original model coefficients are not changed; transpose, RHS/objective exchange and ≥ relations follow the uploaded lecture construction in 3.3 - Introduction to Sensitivity and Duality.pdf, PDF pp. 22–30. Two-phase construction and transition follow 3.2 - Non-standard LPs.pdf, PDF pp. 24–39. Each task includes its model reference, explicitly describes the adaptation, and supplies these lecture method references. Textbook model locators retain printed/PDF distinctions from TEXTBOOK-SOURCES.md; no new textbook passage search was needed.

Source models: Giapetto, leather production, §4.5 problems 2 and 5, Dakota (existing five standard textbook models), plus lecture landscaping and baking. Scope: max ≤ primal with x≥0. The new topic does not infer unsupported sign rules for other primal families.
