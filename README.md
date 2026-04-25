# Accredian Enterprise - Partial Clone

This project is a Next.js (App Router) clone of the [Accredian Enterprise Landing Page](https://enterprise.accredian.com/). It has been built to be fully responsive using a clean component-driven architecture and styled with Tailwind CSS v4.

## Setup Instructions

1. **Prerequisites**: Ensure you have Node.js installed.
2. **Installation**:
   ```bash
   npm install
   ```
3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

## Deployment on Vercel
This project is deployment-ready for Vercel. Push this repository to GitHub, log into Vercel, and click "New Project" to import your repository. The Next.js preset will automatically handle the build commands.

## Approach Taken
- **Tech Stack**: Next.js 15 (App Router), React 19, Tailwind CSS v4, and Lucide React (for icons). TypeScript was used for strict typing.
- **Architecture**: Separated the layout into manageable, reusable standard components:
  - `components/ui`: Foundational, reusable UI elements (e.g., `Button`).
  - `components/layout`: Global persistent elements (`Navbar`, `Footer`).
  - `components/sections`: Domain-specific chunks representing horizontal slices of the landing page (`Hero`, `Process`, `Programs`).
- **Styling**: Utilized Tailwind CSS to create the modern, sleek aesthetic seen on Accredian with micro-interactions (hover translations, soft shadows) to ensure the interface "wows" the user.
- **Lead Capture Form (Bonus)**: Implemented a React Hook-based form with basic client-side validation that submits data to a dedicated Next.js Route Handler (`/api/leads`). For this assignment, it mocks the data storage in-memory.

## AI Usage Explanation

Antigravity (along with underlying Google internal model integrations) was used to accelerate the development process:
- **Planning**: Analyzed the reference URL to structure the semantic layout. 
- **Boilerplate Generation**: Scaffolding the React components for standard landing page features (Hero, Feature Grids, and FAQs) was expedited by the AI agent.
- **Manual Improvements**: Manually tuned the component logic (e.g., the FAQ accordion state) and adjusted Tailwind configuration metrics to match the exact aesthetic requirements. Hand-stitched the routing and API handlers to ensure clean functional compliance.

## Potential Improvements With More Time
1. **CMS Integration**: Connect the "Programs" and "Stats" components to a Headless CMS (like Sanity or Strapi) to allow non-developers to edit copy easily.
2. **Database Support**: Connect the Lead Capture Form's API route to a real database like PostgreSQL (via Prisma) or Supabase.
3. **Advanced Animations**: Use `framer-motion` for complex scroll-linked animations and staging effects as elements enter the viewport.
4. **Enhanced Accessiblity**: Implement Radix UI primitives for the Accordions and Dialogs to ensure ARIA compliance and keyboard navigation robustness.
