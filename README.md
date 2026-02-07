# Selenium to Playwright Converter (AI-Powered)

An intelligent, local web tool that converts **Selenium Java** test scripts into **Playwright TypeScript** using a local LLM (**Ollama**).

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-stable-green.svg)

## 🏗️ Architecture

The system follows a 3-tier architecture designed for privacy (local LLM) and ease of use.

```mermaid
graph TD
    User[👩‍💻 User] -->|Pastes Java Code| UI[💻 Web UI (Cyberpunk Theme)]
    UI -->|POST /api/convert| Server[🚀 Express.js Server]
    Server -->|Prompt + Context| Ollama[🧠 Ollama (Local LLM)]

    subgraph "Local Environment"
        Server
        Ollama
    end

    Ollama -->|Generated TypeScript| Server
    Server -->|JSON Response| UI
    UI -->|Displays Code| User
```

## ✨ Features

- **Local AI Processing**: Uses `llama3.2` (or compatible models) via Ollama. No data leaves your machine.
- **Smart Conversion**:
  - Maps `By.id`/`By.xpath` → `page.locator()`
  - Adds `await` for async actions automatically.
  - Preserves logic while adopting Playwright best practices.
- **Cyberpunk UI**: A clean, dark-mode terminal aesthetic.
- **Instant Clipboard Copy**: One-click copy for the converted code.

## 🚀 Getting Started

### Prerequisites

1.  **Node.js** (v18+)
2.  **Ollama**: [Download here](https://ollama.com/)
3.  **Llama 3.2 Model**: Run `ollama pull llama3.2`

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/sudhiryadav301/SeleniumToPlaywright.git
    cd SeleniumToPlaywright
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the application:

    ```bash
    node tools/server.js
    ```

4.  Open your browser to: `http://localhost:3000`

## 📂 Project Structure

```plaintext
├── architecture/       # SOPs and Design Docs (Blast Protocol)
├── public/             # Frontend (HTML, CSS, JS)
├── tools/              # Backend Scripts (Server, Verification)
├── gemini.md           # Project Constitution & Schema
└── task_plan.md        # Development Roadmap
```

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS
- **Backend**: Node.js, Express
- **AI Engine**: Ollama (Llama 3.2)

## 🤝 Contributing

1.  Fork the repo
2.  Create your feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add some amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request
