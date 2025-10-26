# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Ben Zumbrunn (benzumbrunn.com) built with Next.js 16.0.0 and React 19.2.0. This is a fully static site configured for Cloudflare Pages deployment, featuring a simple personal landing page with social media links.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Build static export (outputs to /out directory)
npm run build
```

## Deployment

This site is configured for **Cloudflare Pages** with static export.

### Cloudflare Pages Configuration
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node version**: 22 (from .nvmrc)

The site is configured with `output: 'export'` in next.config.js, which generates fully static HTML files that can be served from any static hosting provider.

## Architecture

### Technology Stack
- **Framework**: Next.js 16.0.0 (App Router, with Turbopack)
- **React**: 19.2.0
- **Node Version**: v22 (specified in .nvmrc)
- **Analytics**: Plausible Analytics (script injected in app/layout.js)
- **Styling**: CSS Modules
- **Bundler**: Turbopack (default in Next.js 16)
- **Deployment**: Static export configured for Cloudflare Pages

### Project Structure
- `next.config.js` - Next.js configuration with static export settings
- `app/` - Next.js App Router directory
  - `layout.js` - Root layout with metadata, fonts, and Plausible analytics script
  - `page.js` - Homepage component with social media links
- `components/` - React components
  - `HomeLink/` - Reusable social link component with image and link props
- `styles/` - CSS modules for styling
  - `globals.css` - Global styles (imported in app/layout.js)
  - `Home.module.css` - Homepage styles
- `public/` - Static assets
  - `images/` - Social media icons (imported in app/page.js)
  - `robots.txt` - SEO configuration
  - `favicon.ico`
- `out/` - Generated static export (created by `npm run build`, gitignored)

### Component Patterns
Components follow a simple, co-located pattern where each component has its own directory containing:
- Component JS file (e.g., `HomeLink.js`)
- Component-specific CSS Module (e.g., `HomeLink.module.css`)

Props are passed directly through the component interface (no prop-types or TypeScript).

### Analytics
Analytics tracking is implemented via Plausible (script loaded in app/layout.js) for privacy-friendly website analytics.

### App Router Notes
- The site uses the App Router (introduced in Next.js 13, stable in 14+)
- `app/layout.js` replaces the old `_app.js` and `_document.js` files
- Metadata is defined using the `metadata` export instead of `<Head>` component
- All components in the `app/` directory are Server Components by default
