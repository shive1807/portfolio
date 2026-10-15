# Shivam Bhati — Portfolio

Personal portfolio website for **Shivam Bhati**, Senior Gameplay Engineer. Built to showcase 6+ years of game development experience across combat systems, real-time multiplayer, and shipped titles reaching 15M+ downloads.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS 3.4 + CSS custom properties |
| Animations | GSAP 3.15 + ScrollTrigger |
| Scroll | Lenis 1.3 (smooth scroll) |
| Fonts | Space Grotesk (display), Inter (body) |

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata, custom cursor
│   ├── page.tsx         # Page composition + Lenis/GSAP init
│   └── globals.css      # Design tokens, animations, utility classes
├── components/
│   ├── EntryScreen.tsx  # Full-screen intro with particle field
│   ├── Hero.tsx         # Title, stats, CTA
│   ├── Nav.tsx          # Navigation bar
│   ├── Cursor.tsx       # Custom cursor tracking
│   ├── Particles.tsx    # Canvas particle system
│   └── sections/
│       ├── Numbers.tsx          # Animated impact counters
│       ├── FeaturedWork.tsx     # Project showcase rows
│       ├── CombatSystem.tsx     # Interactive C++ code walkthrough
│       ├── Systems.tsx          # Capabilities overview
│       ├── MultiplayerSection.tsx # Networking architecture diagram
│       ├── About.tsx            # Personal story + photo
│       ├── Experience.tsx       # Career timeline
│       └── Contact.tsx          # Contact links + footer
└── public/
    └── images/
        ├── profile_picture.jpg
        ├── companies/           # Company logos
        └── projects/            # Project screenshots
```

## Sections

- **Entry Screen** — Animated intro with particle field, blur-in title, and "Enter Portfolio" gate
- **Hero** — Large typographic headline with live stats (6+ years, 15M+ downloads, 10M+ players, 10K peak CCU)
- **Impact Numbers** — Scroll-triggered count-up animations
- **Featured Work** — Four shipped projects with images, tech tags, and store links
- **Agies Combat** — Interactive node diagram tracing a full Unreal Engine C++ attack pipeline from input to death
- **Systems** — Tabbed capabilities overview across Combat, Multiplayer, AI, Gameplay, Live Features, UI, and Optimization
- **Multiplayer** — Architecture diagram + solutions list + technology tags
- **About** — Personal origin story from IIT Roorkee to professional game dev
- **Experience** — Vertical timeline: GameDuell → Audify → SplashLearn → GMNG → GetMega
- **Contact** — Email, LinkedIn, GitHub links with open-to-work status indicator

## Design System

```css
--bg:      #080808   /* near-black background */
--surface: #0f0f0f   /* card/panel background */
--text:    #efefef   /* primary text */
--muted:   #6b6b6b   /* secondary text */
--accent:  #D4FF58   /* lime-yellow highlight */
```

Aesthetic: dark editorial, grain overlay, custom cursor, Space Grotesk all-caps labels, scroll-reveal via GSAP ScrollTrigger.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Featured Projects

| # | Project | Role | Highlights |
|---|---|---|---|
| 01 | Football World | Lead Gameplay Engineer | 10M+ players, 10K peak CCU, Google nominated |
| 02 | Bull Run | Gameplay Engineer | Unreal Engine, blockchain/NFT systems |
| 03 | GetMega Carrom | Game Developer | Custom physics engine, Nakama backend, 10K CCU |
| 04 | GMNG Mini Ludo | Lead Developer | Server-authoritative, AWS, 2–3 min rounds |

## Contact

- Email: shivambhati21@gmail.com
- LinkedIn: [shivambhati1807](https://www.linkedin.com/in/shivambhati1807/)
- GitHub: [shive1807](https://github.com/shive1807)
