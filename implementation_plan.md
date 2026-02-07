# Implementation Plan: Selenium to Playwright Converter

## Goal

Build a local web tool that takes Selenium Java code as input, uses Ollama to convert it to Playwright TypeScript, and displays the result.

## User Review Required

> [!IMPORTANT]
>
> - Requires **Ollama** running locally on port `11434`.
> - Requires `llama3.2` model (or similar) pulled.

## Proposed Changes

### Layer 1: Architecture

- Create `architecture/ui_sop.md`: Define the UI/Server interaction.

### Layer 3: Tools & Server

#### [NEW] [server.js](file:///d:/AI%20Course/AI%20Tester/Project2_SeleniumToPlaywright/tools/server.js)

- Express server running on port 3000.
- Serves static files from `public/`.
- Endpoint `POST /api/convert`:
  - Receives `{ rawJavaCode, model }`.
  - Calls `http://localhost:11434/api/generate`.
  - System Prompt: "You are an expert SDET. Convert the following Selenium Java code to Playwright TypeScript. Use page.locator instead of By. Use await for all async actions. Prioritize readability."
  - Returns `{ convertedTsCode }`.

#### [NEW] [index.html](file:///d:/AI%20Course/AI%20Tester/Project2_SeleniumToPlaywright/public/index.html)

- Simple 2-pane content: Input (Java) -> Output (TS).
- "Convert" button.
- Model selector (optional, defaults to llama3.2).

#### [NEW] [style.css](file:///d:/AI%20Course/AI%20Tester/Project2_SeleniumToPlaywright/public/style.css)

- Basic clean styling (Blast Phase 4: Stylize).

### Dependencies

- `express`

## Verification Plan

### Automated Tests

- Run `node tools/verify_ollama.js` to ensure LLM is up.
- Create `tests/server_test.js` to hit the `/api/convert` endpoint with a dummy string.

### Manual Verification

1. Start server: `node tools/server.js`.
2. Open `http://localhost:3000`.
3. Input:
   ```java
   driver.findElement(By.id("login")).click();
   ```
4. Click Convert.
5. Verify Output:
   ```typescript
   await page.locator("#login").click();
   ```
