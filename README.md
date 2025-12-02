# Playwright + Cucumber BDD Automation Framework (TypeScript)

A clean, modern, senior-level QA automation framework using:

- **Playwright**
- **Cucumber BDD**
- **TypeScript**
- **Page Object Model**
- **GitHub Actions CI/CD**
- **Environment-based config**
- **Reusable utilities & hooks**

This repo is structured as a **starter framework** for:
- SaaS teams who need fast, clean automation  
- Startups migrating to Playwright or Cucumber  
- Consultants delivering 5–7 day automation sprints  
- Senior QA engineers demonstrating architecture skills  

It shows how to build scalable UI + API automation with clear separation of concerns, maintainability, and CI-ready structure.

---

## 🚀 Features

- Full **Cucumber BDD** setup  
- **Page Object Model** organization  
- **Global hooks** for browser lifecycle  
- **Environment variable support**  
- **Reusable test data + helpers**  
- **Parallel execution** through Playwright projects  
- **HTML + JSON reporting**  
- **CI pipeline** with GitHub Actions  
- Clean, understandable folder structure  

---

## 📂 Project Structure

```
/features
  /login
    login.feature
    login.steps.ts

/pages
  base.page.ts
  login.page.ts

/utils
  testData.ts
  waitHelpers.ts

/hooks
  hooks.ts

/config
  playwright.config.ts
  env.ts

/ci
  ci.yml
```

Each folder represents a clean layer in the automation architecture:
- **features** → BDD scenarios  
- **steps** → glue code  
- **pages** → POM abstraction  
- **utils** → helpers & test data  
- **hooks** → test setup/teardown  
- **config** → Playwright & env setup  
- **ci** → continuous integration  

---

## 🧪 Running Tests Locally

### 1. Install dependencies
```
npm install
```

### 2. Install Playwright browsers
```
npx playwright install
```

### 3. Set your environment
Create a `.env.local` file:
```
BASE_URL=https://your-app.com
USER_EMAIL=your-email
USER_PASSWORD=your-password
```

### 4. Run tests
```
npx cucumber-js --require-module ts-node/register
```

---

## 🏗 CI/CD with GitHub Actions

This repo includes a full `ci.yml` workflow:

- Installs Node  
- Installs dependencies  
- Installs browsers  
- Runs BDD tests  
- Produces HTML + JSON reports  

Ideal for PR pipelines and deployment gates.

---

## 🧩 Example Scenario (Login)

```gherkin
Scenario: Login with valid credentials
  Given I navigate to the login page
  When I enter valid login details
  And I submit the form
  Then I should see my dashboard
```

---

## 🧱 Example Page Object

```ts
export class LoginPage extends BasePage {
  emailField = '#email';
  passwordField = '#password';
  submitButton = '#submit';

  async login(email, password) {
    await this.type(this.emailField, email);
    await this.type(this.passwordField, text);
  }
}
```

---

## 🤝 Perfect For Consulting Work

This template is designed to showcase senior-level skills and acts as a starting point for consulting engagements such as:

### **➡️ Playwright → Cucumber BDD Migration**
- Convert existing tests  
- Create reusable steps  
- Build POM structure  
- Add CI + reports  

### **➡️ Critical Flow Automation**
- Login  
- Signup  
- Settings  
- Checkout  
- User journeys  

Delivery time: **5–7 days** depending on scope.

---

## 📧 Contact / Portfolio (optional to fill later)

- LinkedIn: https://www.linkedin.com/in/bmcghee98/
- Email: brianamcghee98@gmail.com

---

## 📄 License

MIT.

---

This project demonstrates clean engineering practices and is built to scale.  
Use it as a starting point for your automation suite, or as part of a rapid consulting engagement.
