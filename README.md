# Playwright BDD Starter (Cucumber + TypeScript)

This project is a clean, minimal automation framework built with Playwright, Cucumber (BDD), and TypeScript.  
It includes UI tests, API tests, a hybrid API/UI flow, a mock server, CI setup, and a simple page object structure.

The goal is to show how an SDET structures and maintains an automation framework:  
clear folders, reusable steps, hooks, environment state, and reliable CI execution.

---

## 🔧 Tech Stack

- Playwright (browser automation)
- Cucumber.js (Gherkin BDD)
- TypeScript
- GitHub Actions (CI)
- Express mock server (for API endpoints)
- Page Object Model (POM)

---

## 📁 Project Structure

```
.
├── features/              # Feature files (BDD scenarios)
├── steps/                 # Step definitions
├── pages/                 # Page Objects
├── hooks/                 # Before/After hooks (browser, tracing, state)
├── utils/                 # Helpers and shared utilities
├── mock/                  # Static HTML mock UI (login + dashboard)
├── mock-server.js         # Express server for API endpoints
├── cucumber.js            # Cucumber configuration
├── tsconfig.json
├── package.json
```

---

## 🚀 What This Framework Demonstrates

### **UI Tests**
- Login flow
- Dashboard rendering
- Page Objects for reusable interactions

### **API + UI Hybrid Test**
- Create a record via API
- Fetch and display records on the mock dashboard
- Validate the created record appears in the UI

### **Mock Backend**
The mock server provides:
- `POST /api/create` — create a record
- `GET /api/records` — return all created records
- Static serving of HTML pages

Records are stored in memory during the server session.

---

## 🧪 Running Tests

### Start the mock server:
```
npm run mock-server
```

### Execute the full suite:
```
npx cucumber-js
```

### Run with tags:
PowerShell:
```
$env:TAGS='@auth'; npx cucumber-js
```

Mac/Linux:
```
TAGS=@auth npx cucumber-js
```

---

## 🧷 Hooks & Artifacts

The framework captures:
- Traces on failure
- Screenshots on failure
- Reusable browser instance
- Storage state for authenticated flows

Hooks are defined in `hooks/hooks.ts`.

---

## ⚙️ CI Pipeline

GitHub Actions runs:
- Dependency install
- Mock server
- Playwright tests
- Uploads traces and screenshots as artifacts

Workflow located at:
```
.github/workflows/playwright.yml
```

---

## 📌 Notes for Reviewers / Recruiters

This repository demonstrates:
- Ability to set up an automation framework from scratch
- Familiarity with Playwright and Cucumber
- Use of Page Objects
- API + UI synchronization
- Debugging and maintaining TypeScript test code
- CI integration and test reliability patterns

The framework is intentionally kept simple, clear, and readable.

---

## 📚 License
MIT
