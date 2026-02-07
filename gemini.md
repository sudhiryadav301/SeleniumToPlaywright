# GEMINI.MD: Project Constitution

## 1. Project Overview

**Name**: Selenium Java to Playwright TS/JS Converter
**Goal**: Build a deterministic tool to convert Selenium Java test scripts to Playwright TypeScript/JS scripts.
**Protocol**: B.L.A.S.T. (Blueprint, Link, Architect, Stylize, Trigger)

## 2. Data Schema (The Law)

## 2. Data Schema (The Law)

### Core Type: `ConversionPayload`

- **Input**: `rawJavaCode` (String) - The Selenium Java code.
- **Output**: `convertedTsCode` (String) - The Playwright TypeScript code.
- **Engine**: Local LLM (Ollama)

## 3. Behavioral Rules

- **Readability First**: Prioritize idiomatic Playwright code over 1:1 API mapping.
- **Ollama Integration**: Use a system prompt that enforces Playwright best practices (e.g., `await`, `Locator`).
- **Idempotency**: The conversion should yield consistent results for the same input (setup temperature 0).

## 4. Architectural Invariants

- **Layer 1 (SOPs)**: Conversion logic must be documented first in `architecture/`.
- **Layer 3 (Tools)**: All logic must range from parsed AST or Regex to output code. No guessing.
- **State**: Self-healing via `progress.md` and `findings.md`.

## 5. Maintenance Log

- [init] Project initialized.
- [build] Phase 1-4 complete. Data Schema defined. Ollama connected.
- [deploy] UI Server running at http://localhost:3000.
- [verify] Backend responding. UI verification skipped (env issue).
