const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// OLLAMA Config
const OLLAMA_URL = 'http://localhost:11434/api/generate';

app.post('/api/convert', async (req, res) => {
    const { rawJavaCode, model = 'llama3.2' } = req.body;

    if (!rawJavaCode) {
        return res.status(400).json({ error: 'No Java code provided' });
    }

    console.log(`[Converting] Model: ${model}, Length: ${rawJavaCode.length} chars`);

    const systemPrompt = `You are an expert SDET. Your goal is to convert Selenium Java code to Playwright TypeScript.
    RULES:
    1. Use 'page.locator()' instead of 'By.id', 'By.xpath', etc.
    2. Use 'await' for all interactions (click, fill, etc.).
    3. Map Assertions: 'Assert.assertEquals' -> 'expect(locator).toHaveText()' or similar.
    4. Return ONLY the TypeScript code. No markdown backticks, no explanation.`;

    try {
        const response = await fetch(OLLAMA_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: model,
                prompt: rawJavaCode,
                system: systemPrompt,
                stream: false,
                temperature: 0.1
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama Error: ${response.statusText}`);
        }

        const data = await response.json();
        const convertedTsCode = data.response.trim();

        res.json({ convertedTsCode });

    } catch (error) {
        console.error('Conversion Failed:', error);
        res.status(500).json({ error: 'Failed to connect to Ollama or Internal Error' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`🔗 Connected to Ollama at ${OLLAMA_URL}`);
});
