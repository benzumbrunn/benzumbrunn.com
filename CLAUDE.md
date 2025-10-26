# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Ben Zumbrunn (benzumbrunn.com) built with Next.js 16.0.0 and React 19.2.0. This is a simple, static personal landing page with social media links.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Architecture

### Technology Stack
- **Framework**: Next.js 16.0.0 (Pages Router, with Turbopack)
- **React**: 19.2.0
- **Node Version**: v22 (specified in .nvmrc)
- **Analytics**: Plausible Analytics (script injected in _app.js)
- **Styling**: CSS Modules
- **Bundler**: Turbopack (default in Next.js 16)

### Project Structure
- `pages/` - Next.js pages using the Pages Router
  - `_app.js` - Root app component with Plausible analytics script
  - `_document.js` - Custom document with Google Fonts (Orbitron) preconnect
  - `index.js` - Homepage with social media links
  - `api/` - Next.js API routes (includes example hello.js endpoint)
- `components/` - React components
  - `HomeLink/` - Reusable social link component with image and link props
- `styles/` - CSS modules for styling
  - `globals.css` - Global styles
  - `Home.module.css` - Homepage styles
- `public/` - Static assets
  - `images/` - Social media icons
  - `robots.txt` - SEO configuration
  - `favicon.ico`
- `fonts/` - Custom font files (ArchitectsDaughter, NanumMyeongjo variants)

### Component Patterns
Components follow a simple, co-located pattern where each component has its own directory containing:
- Component JS file (e.g., `HomeLink.js`)
- Component-specific CSS Module (e.g., `HomeLink.module.css`)

Props are passed directly through the component interface (no prop-types or TypeScript).

### Analytics
Analytics tracking is implemented via Plausible (script loaded in _app.js:6) for privacy-friendly website analytics.
