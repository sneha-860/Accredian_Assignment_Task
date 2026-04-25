# Accredian Enterprise Portal 

A high-fidelity, executive-grade landing page clone for **Accredian Enterprise**, built with a focus on modern web aesthetics, performance, and professional-grade UI/UX.

##  Project Overview
This portal is designed to communicate authority and technical sophistication for B2B enterprise training. It features a modular, section-based architecture that delivers a seamless, responsive experience across all device breakpoints.

##  Core Features

- **Executive Hero Architecture**: A clean, minimalist mosaic grid showcasing high-level strategic metrics and brand authority.
- **Dynamic Success Stories**: A state-managed, touch-safe testimonial slider with SSR-safe hydration guards and responsive layout logic.
- **Domain Expertise Hubs**: Interactive learning modules categorized by industry, featuring high-contrast hover states and professional icons.
- **CAT Framework & Methodology**: A detailed breakdown of the corporate training process using high-fidelity cards and structured content.
- **Lead Capture System**: A fully integrated enquiry form with real-time validation and a Next.js API Route handler (`/api/leads`).
- **Global Impact Metrics**: A visually anchored dashboard section highlighting 500+ corporate partnerships and 10k+ trained professionals.
- **Premium UI Polish**: Includes custom scrollbars, atmospheric glassmorphism, floating dashboard mockups, and sophisticated typographic tracking.

##  Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom Tailwind-based keyframes (float, fade-in, pulse)
- **State Management**: React Hooks (useState, useEffect) for slider and form logic

##  Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Navigate to**: `http://localhost:3000`

##  Architecture

The project follows a **Modular Section-Based Architecture**:

- `components/layout/`: Global elements (Navbar, Footer).
- `components/sections/`: Isolated, single-responsibility modules for each page section.
- `components/ui/`: Reusable, design-system-aligned primitives (Buttons, Inputs, Accordions).
- `app/api/`: Server-side route handlers for form processing.

---
**Built with clinical precision for Accredian Enterprise.**
1. **CMS Integration**: Connect the "Programs" and "Stats" components to a Headless CMS (like Sanity or Strapi) to allow non-developers to edit copy easily.
2. **Database Support**: Connect the Lead Capture Form's API route to a real database like PostgreSQL (via Prisma) or Supabase.
3. **Advanced Animations**: Use `framer-motion` for complex scroll-linked animations and staging effects as elements enter the viewport.
4. **Enhanced Accessiblity**: Implement Radix UI primitives for the Accordions and Dialogs to ensure ARIA compliance and keyboard navigation robustness.
