# Build Notes — Visit Sudan

Target tech stack for production (provided by client):

```bash
npm create vite@latest visit-sudan -- --template react
cd visit-sudan
npm install
npm install three @react-three/fiber @react-three/drei framer-motion gsap
npm install lenis @studio-freight/hamo
npm install @react-three/postprocessing postprocessing
npm install maath
npm install split-type
npm install three-stdlib
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Additional libs (round 2):**
- **lenis** + **@studio-freight/hamo** — buttery smooth scroll (the cinematic scroll feeling)
- **@react-three/postprocessing** + **postprocessing** — bloom / chromatic aberration / film grain on the 3D hero
- **maath** — math helpers for R3F (easing, particle distributions)
- **split-type** — split text into chars/words/lines for GSAP/Framer-driven typography reveals
- **three-stdlib** — extra Three.js loaders/controls (e.g. OrbitControls, GLTFLoader) used by drei under the hood

**Round 3 (motion + ambience):**

```bash
npm install gsap @gsap/react
npm install locomotive-scroll
npm install @studio-freight/tempus
npm install lottie-react
npm install canvas-confetti
npm install howler
```

- **gsap** + **@gsap/react** — `useGSAP` hook + ScrollTrigger / SplitText for cinematic timeline animations
- **locomotive-scroll** — alternative smooth-scroll (we're using Lenis above; pick one — running both will fight)
- **@studio-freight/tempus** — single RAF loop coordinator across Lenis + GSAP + R3F, prevents janky multi-loop scenarios
- **lottie-react** — for any Lottie animations (e.g. preloader, map pin pulses)
- **canvas-confetti** — celebratory burst (e.g. after "Send My Trip Request")
- **howler** — ambient audio (desert wind / soft Nile reed flute loop on hero, with mute toggle)

## Stack

- **Vite + React** — bundler & framework
- **three / @react-three/fiber / @react-three/drei** — 3D scenes (likely hero pyramids/desert, parallax globe, scroll-driven 3D)
- **framer-motion** — UI motion (page transitions, reveal, hover)
- **gsap** — scroll-triggered timelines & cinematic sequencing (ScrollTrigger expected)
- **tailwindcss** — utility CSS

## Design system → code mapping

The tokens defined in `colors_and_type.css` should be ported to:
- `tailwind.config.js` → `theme.extend.colors`, `fontFamily`, `spacing`, `boxShadow`, `borderRadius`, `letterSpacing`
- A `src/styles/tokens.css` `@layer base` block (mirror of `colors_and_type.css`)

## Photography

Real cinematic imagery lives in `public/images/visit-sudan/` and is mapped via `src/data/images.js`. Components import the manifest and reference images by symbolic name:

```js
import { VISIT_SUDAN_IMAGES as IMG } from "../data/images";
// then: src={IMG.meroeHero}
```

The reusable `<ImageCard />` (in `src/components/ImageCard.jsx`) applies the canonical treatment: `object-cover` + cinematic dark→ink gradient + warm/cool overlay grade + cursor-tracking gold radial glow + slow 1.06× zoom on hover + subtle mouse parallax. Use it everywhere photography appears.

The 9 required filenames are listed in `public/images/visit-sudan/README.md`.
