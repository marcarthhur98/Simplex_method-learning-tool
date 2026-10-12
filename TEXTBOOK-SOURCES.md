# Textbook practice catalogue

Source: the uploaded Operational-Research-Winston-Wayne.pdf (Winston, fourth edition). Educational content is confined to the uploaded textbook and existing lecture conventions. No web examples were used.

## Navigation and page numbering

The contents (PDF pp. 5–11) and subject index (PDF pp. 1418–1434) were consulted before extracting relevant sections. Routes: §§3.1–3.3 for formulations/special cases, §§4.1/4.5/4.7/4.11–4.13 and Chapter 4 review for simplex, §§6.2/6.3/6.5/6.10 for matrix, sensitivity and duality, and §10.1 for revised simplex. Selected passages were read; the entire textbook was not repeatedly scanned. Printed page and one-based PDF viewer page are stored separately. The +16 offset was checked against the selected section headings and rendered pages.

Original exercise text has been paraphrased concisely. Models retain their original numbers, relations, objective sense and variable order. Narratives fix source variable units so exact algebra can be graded. The implementation adds guided questions, drills and evidence checks. Where a model is used in another method, that is a labelled method adaptation, not an assertion that the textbook posed that exact extra question.

## Minimum coverage

| Topic | Distinct textbook models in that topic | Selection |
|---|---:|---|
| Independent formulation | 5 | Giapetto, Leather Limited, Dakota, Dorian, Bevco |
| Standard simplex | 5 | Giapetto, Leather Limited, §4.5 problems 2 and 5, Dakota |
| Non-standard transformations | 8 | §4.12 problems 1–6, Dorian, Bevco |
| Big M | 8 | Same eight mixed/equality/minimisation models |
| Two-phase and transition | 8 | Same eight models; §4.13 problem 1 explicitly assigns §4.12 problems |
| Infeasibility | 5 | §4.12 problem 4; §3.3 problems 1 and 8; Chapter 4 review problems 6 and 9 |
| Special cases | 5 | §4.7 problems 2, 4 and 5; §4.11 problem 1; Chapter 4 review problem 4 |
| Matrix form | 5 | Five standard models; supplied first-pivot basis for a nontrivial inverse |
| Revised simplex | 5 | Five standard models; repeat from their original slack bases |
| Duality | 5 | Five standard models; dual construction, slacks, feasible certificates and gap |
| Sensitivity | 5 | Five standard models; first-RHS direction, allowable interval, basic values and shadow price |

There are **22 distinct LPs**, reused across appropriate methods. Counts above are per topic; models are deliberately reused across methods. Standard practice also includes the five special-case LPs. Original lecture exercises remain available.

## Original models and verified outcomes

| ID | Original textbook problem | Source locator | Verified original outcome |
|---|---|---|---|
| book-giapetto | Textbook Â· Giapetto toys | Â§3.1 Â· Example 1; formulation pp. 49â€“51; printed p. 49 / PDF p. 65 | optimal · Z=180 |
| book-leather | Textbook Â· Leather Limited belts | Â§4.1 Â· Example 1; model printed p. 128 / PDF p. 144; printed p. 127 / PDF p. 143 | optimal · Z=140 |
| book-452 | Textbook Â· Simplex Â§4.5 problem 2 | Â§4.5 Â· Group A problem 2; printed p. 149 / PDF p. 165 | optimal · Z=32/3 |
| book-455 | Textbook Â· Simplex Â§4.5 problem 5 | Â§4.5 Â· Group A problem 5; printed p. 149 / PDF p. 165 | optimal · Z=80 |
| book-dakota | Textbook Â· Dakota furniture | Â§4.5 Â· Example 2; model printed p. 141 / PDF p. 157; printed p. 140 / PDF p. 156 | optimal · Z=280 |
| book-4121 | Textbook Â· Big M Â§4.12 problem 1 | Â§4.12 Â· Group A problem 1; printed p. 178 / PDF p. 194 | optimal · Z=1 |
| book-4122 | Textbook Â· Big M Â§4.12 problem 2 | Â§4.12 Â· Group A problem 2; printed p. 178 / PDF p. 194 | optimal · Z=4 |
| book-4123 | Textbook Â· Big M Â§4.12 problem 3 | Â§4.12 Â· Group A problem 3; printed p. 178 / PDF p. 194 | optimal · Z=5 |
| book-4124 | Textbook Â· Big M Â§4.12 problem 4 | Â§4.12 Â· Group A problem 4; printed p. 178 / PDF p. 194 | infeasible |
| book-4125 | Textbook Â· Big M Â§4.12 problem 5 | Â§4.12 Â· Group A problem 5; printed p. 178 / PDF p. 194 | optimal · Z=2 |
| book-4126 | Textbook Â· Big M Â§4.12 problem 6 | Â§4.12 Â· Group A problem 6; printed p. 178 / PDF p. 194 | optimal · Z=2 |
| book-dorian | Textbook Â· Dorian advertising | Â§3.2 Â· Example 2; model printed p. 61 / PDF p. 77; printed p. 60 / PDF p. 76 | optimal · Z=320 |
| book-bevco | Textbook Â· Bevco drink | Â§4.12 Â· Example 4; model printed p. 173 / PDF p. 189; printed p. 172 / PDF p. 188 | optimal · Z=25 |
| book-331 | Textbook Â· Special cases Â§3.3 problem 1 | Â§3.3 Â· Group A problem 1; printed p. 68 / PDF p. 84 | infeasible |
| book-338 | Textbook Â· Special cases Â§3.3 problem 8 | Â§3.3 Â· Group A problem 8; printed p. 68 / PDF p. 84 | infeasible |
| book-review6 | Textbook Â· Chapter 4 review problem 6 | Chapter 4 review Â· problem 6; printed p. 213 / PDF p. 229 | infeasible |
| book-review9 | Textbook Â· Chapter 4 review problem 9 | Chapter 4 review Â· problem 9; printed p. 213 / PDF p. 229 | infeasible |
| book-472 | Textbook Â· Alternative optima Â§4.7 problem 2 | Â§4.7 Â· Group A problem 2; printed p. 154 / PDF p. 170 | optimal · Z=6 |
| book-474 | Textbook Â· Alternative optima Â§4.7 problem 4 | Â§4.7 Â· Group A problem 4; printed p. 155 / PDF p. 171 | optimal · Z=3 |
| book-475 | Textbook Â· Alternative optima Â§4.7 problem 5 | Â§4.7 Â· Group A problem 5; printed p. 155 / PDF p. 171 | optimal · Z=12 |
| book-4111 | Textbook Â· Degeneracy Â§4.11 problem 1 | Â§4.11 Â· Group A problem 1; printed p. 171 / PDF p. 187 | optimal · Z=16 |
| book-review4 | Textbook Â· Unbounded Chapter 4 review problem 4 | Chapter 4 review Â· problem 4; printed p. 213 / PDF p. 229 | unbounded |

## Method sources and differences

- Transformations and artificial starting bases: §§4.1 and 4.12, printed pp. 127–130 and 172–178 / PDF pp. 143–146 and 188–194.
- Phase I/II and the instruction to reuse §4.12 exercises: §4.13, printed pp. 178–184 / PDF pp. 194–200. The lab preserves its full editable Phase II transition and lecture cleanup rules.
- Matrix reconstruction: §6.2, printed pp. 267–274 / PDF pp. 283–290. Matrix exercises use a supplied basis after one exact valid pivot; this basis/context is an implementation adaptation and does not alter the LP.
- Revised direction and inverse update: §10.1, printed pp. 562–567 / PDF pp. 578–583; uploaded lecture 4.2 conventions continue to govern entering choices, tied ratios and update notation.
- Dual construction: §6.5, printed pp. 295–301 / PDF pp. 311–317; certificate and complementary-slackness interpretation: §6.10, printed pp. 325–328 / PDF pp. 341–344.
- Single-RHS sensitivity: §6.3, printed pp. 275–288 / PDF pp. 291–304. The extra Δ checks are calculated from each original LP; no resource quantity or objective coefficient has been invented. N/A means an endpoint has no finite bound.
- Special-case evidence: §§4.7 and 4.11, printed pp. 153–155 and 168–172 / PDF pp. 169–171 and 184–188.

The lab keeps exact symbolic M, instead of substituting a large floating-point value. It retains lecture equation-row signs, nonnegative Phase I artificial-sum minimisation and acceptance of any valid improving/tied pivot choice. Existing glossary notes continue to distinguish equation coefficients from the opposite reduced-cost definition. Infeasibility is established only after completing Phase I or the artificial penalty optimum; unboundedness requires an improving column without an eligible leaving row. A zero-cost nonbasic coefficient alone does not prove a distinct optimal point.

## Verification and practical scope

Each original LP was solved with both exact Big M and exact two-phase calculations. A separate Python Fraction-based vertex and feasible-direction enumeration independently verified all 22 outcomes and finite objective values. All improving standard choices and tied leaving choices were traversed across 45 bases and 42 pivots. Browser checks exercise the actual model selection, prerequisite, calculation and completion interfaces.

The independent algebra editor supports up to 12 fixed source variables, bounded linear sums, exact fractions/decimals, reordered constraints and equivalent row scalings. It does not grade prose definitions or arbitrary algebraic redundancy. Sensitivity additions cover a single first-resource RHS change; unrestricted-parameter sensitivity and new methods are outside this update. The unrestricted-variable lecture exercise remains available but is not counted among the new eight textbook transformation models.

