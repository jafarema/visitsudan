# Push to GitHub

You're three commands away from a live repo.

## 1 — Create the empty repo on GitHub
Go to **github.com/new** → name it (e.g. `visit-sudan-design-system`) → leave it **empty** (no README, no .gitignore, no license — we have our own) → **Create**.

GitHub will show you a "push an existing repository" URL like:
```
https://github.com/YOUR-USER/visit-sudan-design-system.git
```

## 2 — Initialise and push from your machine

Unzip this project, `cd` into it, then:

```bash
git init
git add .
git commit -m "Initial commit — Visit Sudan Design System"
git branch -M main
git remote add origin https://github.com/YOUR-USER/visit-sudan-design-system.git
git push -u origin main
```

That's it. Refresh github.com and the repo is live with the full design system, all preview cards, the website UI kit, and the demo page.

## What's included
- `README.md` — full system documentation (voice, color, type, layout, iconography)
- `SKILL.md` — agent skill manifest (Claude Code compatible)
- `BUILD_NOTES.md` — production stack
- `colors_and_type.css` — token sheet
- `tailwind.config.js` — Tailwind theme mirror
- `Visit Sudan.html` — interactive demo
- `src/` — production React components (canonical source)
- `ui_kits/website/` — website UI kit + demo
- `preview/` — design-system preview cards
- `fonts/`, `public/` — assets
- `LICENSE` — MIT
- `.gitignore` — Node, OS, editor, env

## What's excluded by `.gitignore`
- `quran-app/` — separate concept, its own repo
- `uploads/` — working scratch
- `node_modules/`, `dist/`, `.env*`, `.DS_Store`, IDE files

## After the first push
Future updates:
```bash
git add .
git commit -m "your message"
git push
```
