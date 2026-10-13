Owned and maintained by [marcarthhur98](https://github.com/marcarthhur98).

# MIE262 Simplex Practice Lab

Open **index.html** for standard simplex or **advanced.html** for extended methods in Edge, Chrome or Firefox. Keep all delivered HTML, CSS and JavaScript files together. No installation, server, account or internet connection is needed. Edge is the browser verified end to end.

## Practice workflow

Choose an exercise and mode. The compact header shows the method, min/max sense, phase and completed pivot count. The progress strip identifies the active step.

- **Guided practice:** attempt one calculation or decision at a time.
- **Targeted drill:** practise one skill using a supplied context.
- **Full problem:** submit an entire iteration in standard practice, or all calculations for the current stage in extended practice. Continue until the final evidence check.

Classify the variables before starting. Each MCQ is marked Correct or Wrong without printing a solution. Completed choices collapse into **Variables checked · Review your choices**; expanding them does not require another attempt. The original question stays available in its own disclosure.

For objective preparation and pivots, the read-only reference tableau appears beside your calculation on desktop. Choose earlier states from the reference dropdown. Column headings stay fixed. Use R0 for the objective and R1, R2, … for constraint rows. On narrower screens, **Reference / Your calculation** switches preserve your entries; numeric cells retain their column labels without sideways scrolling.

**Check step**, **Hint** and **Undo** stay close to the work. Empty entries, unreadable expressions and incorrect values receive distinct feedback. The first affected field receives focus and an accessible text message. Technical terms have short inline explanations; longer help and source references expand when needed.

## Exact entry and optional arithmetic assistance

Enter integers, fractions or exact decimals: `1/3` and `1.5` are accepted; a rounded `0.33` does not equal `1/3`. Enter `N/A` for ineligible ratios. A zero ratio is eligible when the entering-column coefficient is strictly positive.

Symbolic values accept equivalent term orders: `3M+3`, `3+3M`, `-M`, `1/2M+3/2`. Unicode minus and whitespace are accepted. The parser is bounded and never evaluates JavaScript.

Turn on **Calculate rows from my operations** at a pivot to practise the decisions without doing all the arithmetic. Fill the whole normalised pivot row yourself first. Then enter `R1 - 3R3` or `R0 = R0 - (8M-1)R3`. Leaving the notes box or pressing **Apply operation** checks your row numbers, destination and multiplier before filling that row. An incorrect operation changes no cells. Objective preparation remains manual.

The interface marks a verified pivot row and calculated rows. Editing the pivot row invalidates dependent calculated indicators; reapply their operations. Notes are optional and ungraded when the calculator is off. Its preference persists, and the control appears only where pivot assistance is available.

Hints require an attempt and progress through **Reminder → Method → Worked step**. Answers are not revealed automatically. Keyboard navigation uses normal Tab and Shift+Tab; arrow keys retain their editing behaviour. **Ctrl+Enter** checks the active step.

## Saved work and review

Numeric drafts, selections, notes and accepted states save locally as you work. Switching exercises or modes resumes their separate sessions. **Restart session** explicitly clears the selected session; other sessions are retained. Browser storage can be disabled or cleared, so use export for a portable record. Related-exercise URLs keep separate sessions.

Review views provide **Iterations**, **Submitted reasoning**, **Definitions** and **Sources**. Iterations appear newest first, distinguish pivots from objective preparation, and can open in the reference panel. **Expand all** shows the full sequence. Submitted row operations accompany their new accepted state. Undo marks later retained snapshots clearly while restoring the earlier current state.

**Export complete session** includes drafts, accepted states, history, notes and assistance usage. Legacy step-history export buttons retain their original formats. JSON import is not implemented.

Existing v1 sessions are migrated without deleting their original storage. Old tableau trails and operation notes are retained. Where an old note cannot be associated reliably with one accepted state, it appears under **Imported operation notes**, preserving its original label. Draft values that the previous version never saved cannot be recovered retroactively.

Completion reviews show the verified result/evidence, hint requests, whether arithmetic assistance was used, and actions to retry, practise a skill or choose another exercise. These are practice records, not mastery scores.

## Educational scope and sources


Only uploaded educational materials supply course content. Every exercise, definition and explanation retains a source reference. PDF references use one-based viewer pages; textbook references distinguish printed pages. The 40-entry glossary flags source notation differences. This UI update reuses established passages and requires no additional textbook search.

The exact engines accept valid alternative entering choices, tied minimum leaving choices and valid artificial-cleanup columns. They do not grade against one stored solution path. No randomly generated educational examples are included. See EXTENDED-SOURCES.md for source details and curriculum boundaries.

## Implementation and checks

engine.js and advanced-engine.js implement exact arithmetic and the methods. session-store.js is the versioned shared store; session-ui.js renders both workspaces from explicit engine/session data. variable-prep.js supplies the source-based identification checkpoint, and operation-assist.js implements the optional calculation UI. Old standalone DOM-observer feature scripts remain in the folder for reference but are no longer loaded by either page.

Run `node tests.cjs`, `node advanced-tests.cjs` and `node ux-tests.cjs` for exact mathematical and expression-parser checks. Performed browser checks and practical limitations are recorded in VALIDATION.md.

## Working-tableau starting values

Pivot calculations start with the reference tableau's numbers already in the working cells. Edit them to perform your row operations; existing saved edits and intentionally empty cells take priority. This copies the old values, not the solved pivot results. The reference and history highlight the selected leaving row in blue, entering column in amber and pivot element in green.

## Formulate before solving

The five standard baking models, infeasible baking variant and soup model now begin with a source-grounded word problem. Define x1/x2 meanings, objective direction and coefficients, original constraint coefficients/relations/RHS, and allowable decision values. The prepared mathematical model and tableau stay hidden until these entries are verified. Existing simplex work is retained. Formulation drafts and verification are saved per session and included in complete exports; Restart clears them.

Constraint rows accept any equivalent positive rescaling in their labelled row. Objective coefficients use the stated original goal and variable units. Feedback identifies the part to reconsider without automatically filling answers. After verification, the formulation collapses into a review summary and the auxiliary-variable checkpoint opens. Other extended examples retain their existing workflow; no unsupported word narratives have been invented for them.

Sources: 1.3 - Linear Programming - blanks filled.pdf, PDF pp. 2–6 and 13–14; each baking variant's existing special-case reference; 3.2 - Non-standard LPs.pdf, PDF pp. 13–15. Narratives are concise paraphrases; model values are unchanged. No textbook passage was needed.

## Independent formulation (latest workflow)

The modelling checkpoint now uses a blank objective expression, a multiline constraint editor, and a blank variable-sign editor. There are no named constraint rows, supplied coefficients, inequality selectors or preset row counts. The problem narrative and fixed lecture variable units remain visible; the prepared model stays hidden until verification. Constraints accept reordered rows, positive rescalings, reversed inequalities with negative rescaling, and variables/constants on either side. Exact arithmetic uses a bounded parser without eval. Use linear sums in x1/x2; parentheses, nonlinear products and arbitrary variable names are not supported. This independent checkpoint replaces the earlier coefficient-box interface. Previous saved simplex work and structured formulation drafts are retained, but an earlier structured pass does not bypass the new independent attempt.

Run `node modelling-tests.cjs` for parser checks.

## Full Phase II transition tableau

The original-objective restoration task now includes the entire editable Phase II tableau, with artificial columns removed. Constraint rows start with the carried-forward feasible values; row 0 starts with the restored original objective before eliminating basic coefficients. Every row has an operation-notes box and is graded. This applies in guided, targeted and full-problem transition practice. Existing row-0 drafts remain compatible; new constraint fields are populated from the carried basis. The optional pivot calculator retains its pivot-only normalization rules; transition operations can be recorded manually.

## Textbook problem bank

**At least five textbook problems are available per topic.** Standard practice adds five bounded textbook models and five special-case models. Extended practice now includes dedicated **Textbook formulation**, **Infeasible models** and **Special cases** topics, alongside the existing methods. Look for **Textbook ·** in the exercise selector.

| Topic | New textbook problems |
|---|---:|
| Independent formulation | 5 |
| Standard simplex | 5, plus 5 special cases |
| Non-standard transformations | 8 |
| Big M | 8 |
| Two-phase | 8 |
| Infeasible models | 5 |
| Special cases | 5 |
| Duality | 5 |
| Sensitivity | 5 |

These use 22 distinct original textbook LPs. Some recur across methods so you can compare techniques on the same model. Added method questions are labelled adaptations; original model coefficients remain unchanged. The full model/source catalogue, printed/PDF page references and verified outcomes are in TEXTBOOK-SOURCES.md. The five independent word problems are Giapetto, Leather Limited, Dakota, Dorian and Bevco. They start with blank algebra fields; no constraint quantities are filled for you.


Existing lecture sessions remain available under their original identifiers. New textbook sessions have separate identifiers. Run `node textbook-tests.cjs` in addition to the existing mathematical suites. No network, install or local server is required: open index.html or advanced.html in a browser as before.

## Visualisation Playground

Finish the exercise's formulation and variable choices, then select **Visualisation Playground** in the practice settings. Available on both standard and extended pages; local and offline.

- **Graph:** constraint boundaries, feasible region (including equality segments, points, empty sets and unbounded regions), exact point inspection, objective contour and improving direction, and replay of accepted iterations. Boundary visibility does not remove mathematical constraints. Orange marks a temporary preview; purple shows accepted work. No optimum is automatically calculated or marked.
- **Pivot explorer:** predict a leaving variable first, then inspect exact ratios and ties. Enter fractional θ or use the slider to explore the boundary and overshoot. The original LP and augmented tableau feasibility are reported separately. Return to practice to submit a pivot.

Iteration selection also updates the practice reference panel. Replay stops at the current accepted iteration. Later snapshots kept after Undo are labelled and can be reviewed explicitly. Playground inputs are temporary and never overwrite saved answers or operation notes. Escape closes the playground and returns focus; use arrow keys between view tabs.

Limits: full constraint graphs require two decision variables. Nonnegative decision-variable models are supported after formulation; unrestricted-variable transformation-only worksheets without an augmented tableau explain why they cannot yet be opened. Workbook tasks with no accepted tableau use a clearly labelled initial model context, not a computed solution or supplied optimal basis. Separate sensitivity, primal–dual and Phase I/II teaching views remain future extensions. The existing artificial-variable iterations can already be inspected in these three views.

Sources and implementation notes: PLAYGROUND-SOURCES.md. Verify the exact layer with `node playground-tests.cjs`.

## Formulate and solve the dual

Open **advanced.html**, choose **Formulate & solve the dual**, and select the source problem (including Giapetto). The certificate workbook also links to this sequence in a separate tab so existing workbook progress stays saved.

1. Construct the dual objective, constraint coefficients/RHS and variable signs from the given primal.
2. Set up surplus and artificial columns yourself.
3. Canonicalise Phase I, choose entering/leaving variables, calculate ratios, and submit pivoted tableaus.
4. Interpret Phase I and complete the full Phase II transition tableau.
5. Continue simplex on the dual objective W and read y from your own final tableau.

No primal optimum is needed or supplied in this sequence. Tableau decision variables are labelled y1, y2, etc. Guided and full modes require the construction before revealing the starting tableau. Targeted drills intentionally supply a simplex context for their selected skill. Exact fractions, alternative improving columns, minimum-ratio ties, Undo, history, drafts, and row-operation assistance use the existing shared workflow. Current coverage is the max/≤/nonnegative primal family already in the uploaded standard bank plus lecture baking and landscaping models; it does not introduce rules for mixed-sign primal duals.

Tableau and simultaneous-equation update: duality and sensitivity use original slack-column readings, scalar binding equations, feasibility checks and objective equality. The playground offers Graph, Pivot explorer and Tableau / equations. No additional textbook search was needed: the existing contents/index locators were reused. Lecture 3.3 PDF pp. 12–15, 22–30; textbook §6.5 printed pp. 295–301 / PDF pp. 311–317 and §6.10 printed pp. 325–328 / PDF pp. 341–344. RHS exercises adapt §6.3 printed pp. 275–287 / PDF pp. 291–303. Original model coefficients are unchanged.

Open the [published lab](https://marcarthhur98.github.io/Simplex_method-learning-tool/) and refresh the page to load this update.
