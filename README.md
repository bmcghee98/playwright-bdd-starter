# Playwright + Cucumber BDD Starter

**A senior-level, scalable UI automation framework built with TypeScript, Playwright, and Cucumber BDD — used as the foundation for my QA automation consulting work.**

![build](https://img.shields.io/badge/Build-Passing-brightgreen)
![playwright](https://img.shields.io/badge/Playwright-1.x-blueviolet)
![cucumber](https://img.shields.io/badge/Cucumber-BDD-8.x-23b14d)
![license](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🚀 Overview

This repository is a **clean, production-ready automation framework** powered by:

- **Playwright** (modern browser automation)
- **Cucumber BDD** (business-readable test scenarios)
- **TypeScript** (strong typing and maintainability)
- **Page Object Model (POM)**
- **World injection for shared context**
- **Mocked local test environment**
- **GitHub Actions CI**

It is fast, reliable, and designed for **scalability, team clarity, and agency use**.

---

## ✨ Features

- ⚡ Modern Playwright browser automation
- 🧠 Cucumber BDD with feature files
- 🏗️ Page Object Model architecture
- 🌍 Per-scenario shared world context
- 🧩 Mock login environment for deterministic tests
- 🔧 Environment loader
- 🤝 GitHub Actions CI pipeline
- 📁 Clear project structure
- ⭐ Agency-ready template

---

## 🧱 Project Structure

```
playwright-bdd-starter/
├── config/
│   └── env.ts
├── features/
│   └── login/
│        ├── login.feature
│        └── login.steps.ts
├── hooks/
│   └── hooks.ts
├── mock/
│   ├── login.html
│   └── dashboard.html
├── pages/
│   ├── base.page.ts
│   └── login.page.ts
├── utils/
│   └── testData.ts
├── world.ts
├── cucumber.js
├── tsconfig.json
└── package.json
```

---

## 🛠️ Installation

```
npm install
```

Playwright installs browsers automatically on first run.

---

## ▶️ Running the Tests

### **1. Start the mock server**

```
npm run mock-server
```

### **2. Run the test suite**

```
npx cucumber-js
```

Expected output:

```
1 scenario (1 passed)
4 steps (4 passed)
```

---

## 📺 Recording a Demo (Optional)

1. Run in headed mode:
   ```
   npx playwright test --headed
   ```
2. Record a short screen capture
3. Save to `/docs/demo.gif`
4. Embed in README:

```md
![Demo](docs/demo.gif)
```

---

## 🧪 Continuous Integration

Automatically runs tests on push via GitHub Actions.

Workflow file:  
`.github/workflows/tests.yml`

---

## 🧩 Why This Template Exists (Agency Use Case)

I use this framework as the base for onboarding new QA automation clients.  
It allows me to:

- deliver working UI tests on day one
- implement POM + BDD standards quickly
- integrate into any CI/CD pipeline
- scale test coverage cleanly
- provide reliable automation with minimal setup time

This is the same foundation I use for automation retainers and consulting engagements.

---

## 📌 Roadmap

- Allure reporting
- API testing module
- Parallel execution
- Docker support
- More example feature files
- VSCode snippets

---

## 📄 License

MIT — see `LICENSE` for full text.
