# Simple Person Record Maker

## Overview
**entries** is a small, production-style **Vue 3 + Vite + TypeScript** application that demonstrates form-driven CRUD, component-based architecture, and client-side validation. Users can create, edit, and remove simple person records (first name, last name, birthday).

## Why this project exists
This project showcases:
- Proficiency with **Vue 3**, **TypeScript**, and **Vite**.
- Implementation of **custom form validation** and user feedback.
- A clear, maintainable component structure suitable for scaling.

## Features
- **Create Entries** — Add a person with first name, last name, and birthday.
- **Validation & Errors** — Ensures required fields are filled and birthday is valid (year within a sensible range).
- **Edit / Update** — Modify existing entries inline and save changes.
- **Delete** — Remove entries from the list.
- **Timestamps** — Each entry includes a creation date for reference.
- **Type-Safe Models** — A dedicated `Entry` class (TypeScript) models the data and exposes getters like `dateStr`.

> Components and modules of note:
> - `src/App.vue` — Main form, list rendering, and CRUD logic.
> - `src/components/MyLi.vue` — Presentational component for individual list items (edit/delete, display).
> - `src/modules/Entry.ts` — Strongly typed model encapsulating entry fields and derived properties.

## Quick start (clone & run)
```bash
# 1) Clone the repository
git clone <https://github.com/DennisNHanrieder/onm2.git>
cd onm2-main/onm2-main

# 2) Install dependencies
npm install

# 3) Start the development server
npm run dev
```

## Dependencies & setup
- **Core tech stack:** Node.js (v18+), Vue 3, Vite, TypeScript.
- **Package manager:** npm (works with pnpm/yarn as well).
- **Recommended:** Use `nvm` or `asdf` to align Node versions.

### Direct dependencies
- `vue` — reactive UI framework powering components and state.

### Dev dependencies
- `@vitejs/plugin-vue` — Vue integration for Vite.
- `@vue/tsconfig` — official TypeScript config presets for Vue.
- `typescript` — static typing for maintainability.
- `vite` — fast dev server and build pipeline.
- `vue-tsc` — type checking for `.vue` single-file components.

## Common scripts
- **Install:** `npm install`
- **Development (HMR):** `npm run dev`
- **Build (production):** `npm run build`
- **Preview build:** `npm run preview`

## How to run tests
A test suite isn't configured yet. Suggested setup:
```bash
# Unit testing with Vitest + Vue Test Utils
npm install -D vitest @vue/test-utils jsdom

# Example script (add to package.json):
# "test": "vitest"

# Run tests
npx vitest
# or
npm test
```
For component testing, consider **Cypress Component Testing** or **Playwright** for E2E flows.

## How to contribute
1. Fork the repo and create a feature branch.
2. Keep commits focused; follow existing patterns for state and props.
3. If you add new features, include validation and update relevant docs.
4. Open a pull request describing the motivation, implementation details, and any screenshots.

## What powers the core functionality?
- **Vue 3 (Composition API)** — Local state for form fields, errors, and entry list.
- **TypeScript models** — `Entry` class encapsulates fields and derived properties.
- **Vite** — Fast dev server and optimized production builds.
- **HTML5 form & events** — For capturing input, validation, and UX feedback.

