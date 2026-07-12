# 🚀 Abhishek's Portfolio 

A production-ready, ultra-premium portfolio website designed for Senior Software Developers, Technical Architects, and Full-Stack Engineers. Crafted with meticulous attention to typography, transitions, responsiveness, and performance, this website is engineered to impress technical recruiters from Tier-1 product companies and high-growth startups alike.

---

## ✨ Primary Capabilities

*   **⚡ High Performance Rendering**: Built with **React 19**, **Vite**, and **Tailwind CSS**, achieving near-instantaneous load times and fluid 60FPS scroll performance.
*   **🎨 Elite Visual Identity**: Designed with a high-contrast slate aesthetics inspired by Stripe, Vercel, and Linear. Includes premium features such as **Glassmorphism**, floating ambient particle meshes on `<canvas>`, and smooth theme persistent toggling (Dark/Light/System Theme).
*   **💫 Seamless Fluid Motion**: Fully integrated with **Framer Motion** for scroll-driven reveals, bento-grid staggers, modal spring physics, and numerical roll counters.
*   **🛠️ Modular Systems Architecture**: Complete separation of content and layout. All data resides in a single, structured `/src/data.js` file, making copy/assets adjustments exceptionally fast.
*   **🔗 Live GitHub API Dashboard**: Connects dynamically to public GitHub endpoints, rendering repo stars, forks, primary languages, and includes a fallback heatmap widget for offline resilience.
*   **✅ Accessible & Robust**: Crafted with semantic HTML5 tags, complete aria-attributes, keyboard navigations, and rigid form inputs validator.

---

## 📂 Project Structure

```text
/
├── .env.example            # Environment variables placeholder
├── index.html              # HTML entrypoint with font preloads
├── metadata.json           # AI Studio applet configurations
├── package.json            # Scripts and packages declarations
├── vite.config.js          # Vite bundler options
├── src/
│   ├── App.jsx             # Global state, theme engine, loading orchestrator
│   ├── data.js             # Complete text configurations & project data
│   ├── index.css           # Google Fonts preloading, theme configurations
│   ├── main.jsx            # React application entrypoint
│   └── components/
│       ├── LoadingScreen.jsx   # Simulated system compiler intro
│       ├── Navbar.jsx          # Sticky glass bar with scroll tracker
│       ├── Hero.jsx            # Typing texts, canvas particles, actions
│       ├── About.jsx           # Specializations & engineering values
│       ├── Skills.jsx          # Bento grid technical skill lists
│       ├── Projects.jsx        # Searchable and filtered project gallery
│       ├── ProjectModal.jsx    # Technical challenges & system architecture popups
│       ├── Experience.jsx      # Vertical timeline work histories
│       ├── Education.jsx       # Degrees and coursework highlights
│       ├── Certifications.jsx # Verified badges grids
│       ├── GitHubSection.jsx   # Active repository API feeds & calendars
│       ├── CodingProfiles.jsx  # Competitive problem-solving records
│       ├── Achievements.jsx    # Animated milestone counters
│       ├── Testimonials.jsx    # Manager endorsements slide carousel
│       ├── Blog.jsx            # Publication placeholder feed
│       ├── Contact.jsx         # Validation forms, clipboard copyers, shares
│       ├── Footer.jsx          # Back to top anchor & social links
│       └── Toast.jsx           # Floating notification drawers
```

---

## ⚡ Setup & Execution

### Prerequisites

Ensure you have [Node.js (v18 or higher)](https://nodejs.org/) and npm installed on your system.

### 1. Installation

Clone this workspace or unzip the archive and install the dependencies:

```bash
npm install
```

### 2. Development Mode

Boot the hot-reloading development server on port `3000`:

```bash
npm run dev
```

The application will launch immediately at `http://localhost:3000`.

### 3. Production Build

Build and optimize the static assets into compressed chunks inside `/dist`:

```bash
npm run build
```

---

## ☁️ Vercel Deployment

This project is a Client-Side Single Page Application (SPA) optimized for edge networks. It compiles static bundles into the `/dist` directory.

### Quick Deploy via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Trigger the deploy flow in your root folder:
   ```bash
   vercel
   ```
3. When prompted, use the following deployment settings:
   *   **Framework Preset**: `Vite` (or `Other`)
   *   **Build Command**: `npm run build`
   *   **Output Directory**: `dist`
   *   **Install Command**: `npm install`
