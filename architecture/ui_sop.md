# Architecture: Converter UI (Express + Vanilla JS)

## Goal

Provide a simple web interface for users to paste Selenium Java code and get Playwright TypeScript code.

## Components

1.  **Frontend**:
    - `public/index.html`: Main entry point.
    - `public/script.js`: Client-side logic (fetch API).
    - `public/style.css`: Clean, dark-mode styling.
2.  **Backend**:
    - `tools/server.js`: Express server.
    - Middleware: `express.json()`, `express.static('public')`.

## Interactions

1.  User Pastes Code -> Click "Convert".
2.  Frontend disables button, shows "Converting...".
3.  Frontend POSTs to `/api/convert`.
4.  Backend calls Ollama.
5.  Backend returns JSON.
6.  Frontend updates Output textarea.
7.  Frontend re-enables button.

## Error Handling

- If Ollama fails, Backend returns 500.
- Frontend displays error message in Output area.
