# Module 3 - Activity 2 - Portfolio

[![Made with Claude](https://img.shields.io/badge/Made_with-Claude-D97757?logo=anthropic&logoColor=white)](https://tjakoen.github.io/notes/ten-times-zero)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)

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

## 💻 Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install Node, Dart, or anything else on your own laptop. This repo is
already configured: open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button → **Codespaces** tab → **Create
codespace on main**. The first launch takes a minute to set up; after that it is
instant. Then run the activity from its terminal exactly as described below.

**Use it in VS Code (recommended).** It works in the browser, but it is nicer in
the desktop app: install the **GitHub Codespaces** extension in VS Code, or from
the running Codespace click the menu (☰) → **Open in VS Code Desktop**. Same
environment, your own editor.

### ⏱️ Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces → Default idle timeout → 10 minutes → Save.**
   A Codespace keeps running (and spending your hours) when you walk away; this
   makes it auto-stop after 10 idle minutes.
2. **Stop it when you finish - don't just close the tab.** Closing the browser
   leaves it running. Stop it at **github.com/codespaces → ••• → Stop
   codespace**, or from inside the editor open the **Command Palette**
   (`Ctrl`/`Cmd`+`Shift`+`P`, or **F1**) and run
   *Codespaces: Stop Current Codespace*.
3. **Delete the Codespace once you've submitted this activity.** Every activity
   gets its own Codespace, so old ones pile up and use your storage. After your
   final push: **github.com/codespaces → ••• → Delete.** You can always recreate
   it later from the green **Code** button.

---
📚 **These materials were authored by [tjakoen](https://github.com/tjakoen), built with Claude.** I use AI in the open, and I expect you to use it to learn the material, not to skip the learning. [How I actually work with AI →](https://tjakoen.github.io/notes/ten-times-zero)
