# Findings Log

## Research & Discoveries

- [Date] Initial Setup: Creating a Selenium to Playwright converter requires mapping:
  - Locators (By.id -> page.locator)
  - Actions (click(), sendKeys() -> click(), fill())
  - Waits (WebDriverWait -> auto-waiting or expect())
  - Assertions (TestNG/JUnit -> Playwright/Jest expect)

## Constraints

- Must handle Java syntax parsing (Regex or AST?).
- Must output valid TypeScript/JavaScript.
