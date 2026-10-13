# Simplex Lab UI and workflow review

Reviewed 7 October 2026. Scope: code inspection and isolated headless Edge sessions, including the current desktop pivot comparison. No interface changes made during this review. Proposals concern presentation and implementation; they introduce no new educational sources.

## Main finding

The strongest existing elements are exact arithmetic, valid alternative pivots, source references, optional arithmetic assistance, and the previous/next tableau comparison. Keep these. Reduce the distance between the question, the learner's decision, the necessary reference and feedback.

A fresh Big M soup session at 1440 × 900 placed the active calculation area at document y≈2460 px. The completed variable-selection section alone occupied ≈930 px. A reload test confirmed that a numeric draft disappeared while its operation note survived. These are measured observations; the proposed arrangements below have not been user-tested.

## Priority 1: protect work and make grading trustworthy

1. Save numeric drafts, selections and operation notes together, per exercise and accepted state. Restore them after reload. Switching modes should preserve a resumable session rather than immediately resetting it. Keep Restart as the explicit reset action. Current evidence: advanced-app.js save/snap/render/reset and setting change handlers; row-notes.js saves notes separately.
2. Accept equivalent mathematical notation. `3+3M` and `3M+3` represent the same value, yet advanced-engine.js M.parse accepts only the latter. Support both orders, Unicode minus and ordinary whitespace through a bounded expression parser. Keep exact fraction grading. Separate “I cannot read this format” from “the value is incorrect.”
3. Validate the destination of row-operation assignments. operation-assist.js currently removes an initial `R<number>=` before checking the expression. Thus a contradictory left-hand destination is ignored. Validate that destination as well as the source row, multiplier and normalised pivot row. Do not silently reward a conceptually inconsistent assignment.
4. Use consistent row labels in references, input tables, operation fields and errors: `R0 · Objective`, `R1 · s1`, etc. advanced-app.js renders objective input ARIA labels with row r+1, while the calculator uses R0. Error feedback should name a visible row and variable column, not only numeric coordinates.

## Priority 2: centre the active task

5. Replace the large introductory area during practice with a small session header: exercise, objective sense, phase, pivot count and mode. Keep the larger introduction for a welcome screen if desired.
6. After correct variable selection, collapse that section to “Variables checked: x1, x2, s1, e2, a2, a3” and an Edit/Review button. Retain all choices and Correct/Wrong feedback when reopened. Do not require the learner to repeat the check just to inspect it.
7. Use one active workspace. At a pivot, keep the existing reference/next-tableau pair as the main content. Put a compact entering/leaving/pivot-number summary above it and Check, Hint and Undo immediately below. Keep arithmetic assistance beside these controls; the current automatic scroll can leave its toggle above the visible work.
8. Make all phases equally navigable: Variables → Prepare objective → Entering variable → Ratio/leaving variable → Pivot → Interpret. Highlight the current step. Two-phase adds explicit Phase I completion, cleanup if needed, and Phase II. This navigation must reflect the actual state, not enforce one stored solution path.
9. Collapse completed setup and repeated instructions. Keep source references available in a compact Sources disclosure per task. Give technical terms short inline explanations or definition buttons; avoid showing the same canonical explanation in both the prompt and a second paragraph.

## Priority 3: make feedback useful without giving away answers

10. Keep variable MCQs as Correct/Wrong, as requested. For calculations, identify the affected row/column and retain all other entries. Optionally show all detected incorrect cells in guided mode; independent mode can retain less specific feedback. Neither should insert a worked answer automatically.
11. Identify empty fields as “Not entered yet,” rather than mathematical errors. Focus the first affected field after checking. Announce errors through accessible status text and link the message to the field, with a visible indicator beyond colour.
12. Use named hint levels: Reminder → Method → Worked step. Retain attempt-before-hint. Keep hints close to the affected row instead of adding a long block below the table.
13. Mark the normalised pivot row as verified before operation assistance. Mark computed rows as calculated, and invalidate that status if the learner changes the pivot row afterward. A general “operation correct” message should not conceal stale derived cells.
14. For calculation tables, add efficient keyboard movement and a clear focus indicator. Do not hijack arrow keys while editing a number or expression. Use Shift+Tab/Tab normally; add deliberate shortcuts only where predictable.

## Priority 4: simplify review and completion

15. Replace the full repeated history stack in the main flow with a compact newest-first iteration list. Selecting an iteration opens it in the reference panel. Keep Expand all for the user's existing full-history workflow. Distinguish accepted pivots from objective preparation; a “Tableau 2” label currently can mean canonicalisation rather than a second pivot.
16. Show the operation notes with their submitted iteration. Currently notes live in Submitted entries while accepted tableaus live in a separate trail. Make it possible to compare values and reasoning in the same view.
17. Label an undone branch explicitly: Current state vs Later state retained for review. Preserve newest-first chronological ordering, but make the active state unmistakable.
18. End with a compact review: result, supporting evidence, source, where hints/arithmetic assistance were used, and actions to retry, practise a relevant skill, or choose another problem. Avoid invented scores or claims of mastery.

## Proposed desktop arrangement

Compact session header: exercise · min/max · phase · pivot count · mode

Step strip: Variables | Objective | Enter | Ratio | Pivot | Interpret

Problem / completed setup: expandable summary

Active instruction and short term help

Reference tableau (left) | Editable next tableau + row operations (right)

Arithmetic assistance · Check step · Hint · Undo · Saved indicator

Local feedback

Review tabs: Iterations (newest first) | Submitted reasoning | Definitions | Sources

On a narrow screen, retain labelled cells and a compact reference/current switch. Preserve both drafts and the selected reference when switching. Do not squeeze every numeric column into unreadably small text merely to avoid scrolling.

## Implementation considerations

advanced.html currently loads separate features that mutate the same page through MutationObservers: variable-prep, tableau-trail, row-notes, operation-assist, tableau-labels and pivot-comparison. This makes layout and persistence depend on DOM text, script order and rerenders. For example, row-note keys include rendered working-table text, while tableau-trail reconstructs state from rendered tables.

Consolidate these behind one explicit session model with accepted states, current step, drafts, notes and assistance settings. Render named components from that model. Let the exact engines remain independent. Maintain backward-compatible loading of existing sessions and migrate histories rather than discarding them. Make standard and extended practice share the same controls and terminology.

Suggested order: draft persistence and grading/parser consistency; compact setup and active workspace; unified iteration review and feedback; keyboard and small-screen polish. Verify each change with the existing mathematical suites and browser flows, then assess the layout with the learner before adding more features.
