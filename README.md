# MIE262 Simplex Practice Lab

Owned and maintained by [marcarthhur98](https://github.com/marcarthhur98).

A browser-based operations research practice tool with exact fraction arithmetic, guided simplex, full problems, independent formulation, definitions, two-phase/Big M, matrix and revised simplex, duality, sensitivity, and a visualisation playground.

## Open the lab

- Website (after GitHub Pages is enabled): https://marcarthhur98.github.io/Simplex_method-learning-tool/
- Standard practice: `index.html`
- Extended methods: `advanced.html`
- Formulate and solve the Giapetto dual: `advanced.html?topic=dual-solve&example=book-giapetto`

You can also download this repository and open `index.html` locally. Keep the files together. No installation, server or account is required.

## Learning workflow

Formulate the LP and select auxiliary variables. Practise entering-variable selection, ratios, leaving-variable selection and exact pivots. Valid alternative improving pivots and minimum-ratio ties are accepted. Drafts, operation notes, history and Undo are available. Optional row-operation assistance requires a verified normalised pivot row.

To solve a dual without first solving its primal, choose **Formulate & solve the dual** in extended methods. Construct the dual, set up its surplus/artificial rows, complete both simplex phases, and read y from your own final tableau.

The playground offers two-variable constraint graphs, pivot movement previews, and complete matrix/basis data. Exploration is separate from submitted work. Graphs require two decision variables; larger models use matrix views.

## Progress and privacy

Progress is stored in each learner's own browser with localStorage. No learner answers are uploaded to a server. There are no accounts or cross-device synchronisation. Local-file progress does not automatically transfer to the hosted site. Clearing browser storage removes saved sessions; export important work first.

## Educational sources

Course explanations and exercises use the supplied lectures, tutorials, textbook and Python resources only. Source catalogues retain file names and slide/PDF references; printed textbook pages are distinguished from PDF pages. Adaptations are identified. Original textbook PDFs, slides and Python source files are not redistributed in this repository. References do not imply ownership of those educational works.

See `TEXTBOOK-SOURCES.md`, `EXTENDED-SOURCES.md` and `PLAYGROUND-SOURCES.md`. No licence to the original educational materials is granted here.

## Verification

With Node.js installed, run `node tests.cjs`, `node advanced-tests.cjs`, `node textbook-tests.cjs`, `node modelling-tests.cjs`, `node ux-tests.cjs`, `node playground-tests.cjs` and `node dual-practice-tests.cjs`. The application itself needs no Node.js.

## Hosting

In repository **Settings → Pages**, select **Deploy from a branch**, then **main / (root)**. `.nojekyll` keeps these buildless static files unchanged. GitHub Pages availability depends on repository visibility and account plan. No deployment bot commits are needed.
