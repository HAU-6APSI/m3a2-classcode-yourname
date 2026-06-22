# Module 3 - Activity 2 - Portfolio

> **A build-it-yourself project.** Follow the **suggested build order** in the
> brief: get the structure green first, then make it look good. Pace yourself.

Build a personal, single-page portfolio you would be happy to link on a CV. This
is about **styling and responsive design**: it must look good and work on a phone
and a wide screen. You choose the styling approach (CSS Modules, Tailwind,
styled-components) and any UI library.

> **Full brief and concepts** are in your course workspace repo:
> `content/m3-styling/m3a2-portfolio.md`, the styling docs
> `content/m3-styling/01`-`07`, and the design theory in `content/react-theory/`.
> **Graded out of 100: 50 automated + a 50-point design rubric** (visual design,
> responsive quality, consistency, accessibility, code, completeness). Full
> rubric in `content/m3-styling/ASSESSMENT.md`.

## What to build (in `src/App.jsx`)

A single page with a hero (your name), an About section, a Projects section, and
a Contact section. Responsive (mobile-first), using Flexbox and/or Grid.

## The required contract

So the automated checks can confirm the structure, include these landmarks
(everything else is your design):

- an `<h1>` with your name
- a `<nav>` and a `<main>`
- headings whose text contains **About**, **Projects**, and **Contact**
- a contact method: a `mailto:` link, an external link, or a form
- **one real styling approach** (not all inline `style={{}}`)
- a Flexbox/Grid layout with **no horizontal scrolling on a 375px phone**

## Set up your repo

1. **Use this template -> Create a new repository**, owner **`HAU-6APSI`**.
2. Name it `m3a2-<classcode>-yourname`, **Private**.
3. Clone it, add your styling library if you want one, and build in `src/`.

```bash
npm install            # add e.g. `npm install @chakra-ui/react` for your styling
npm run dev            # check it at narrow and wide widths
npm test               # run the structure checks locally
npm run build          # must succeed
```

Fill in every field in [`student.json`](student.json).

## Submit

```bash
git add -A
git commit -m "✨ Module 3 Activity 2 - Portfolio"
git push
```

The **Actions** tab shows the structure checks, a mobile-overflow check, and
screenshots of your portfolio at phone / tablet / desktop widths.
