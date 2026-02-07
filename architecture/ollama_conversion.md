# Architecture: Omniscient Conversion (Ollama)

## Goal

Convert Selenium Java code to Playwright TypeScript using a local LLM (Ollama).

## Strategy

1.  **Input Processing**: Clean raw Java string (remove excessive whitespace, package declarations if irrelevant).
2.  **Prompt Engineering**:
    - **System Prompt**: "You are an expert SDET. Convert the following Selenium Java code to Playwright TypeScript. Use `page.locator` instead of `By`. Use `await` for all async actions. Prioritize readability."
    - **User Prompt**: [Java Code Snippet]
3.  **Output Processing**: Extract code block from LLM response (remove markdown backticks).

## Invariants

- **Model**: `llama3.2` (or user specified).
- **Temperature**: `0.1` (for determinism).
- **Format**: Return ONLY the code or a JSON with code field.
