document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convert-btn');
    const javaInput = document.getElementById('java-input');
    const tsOutput = document.getElementById('ts-output');
    const modelSelect = document.getElementById('model-select');
    const statusEl = document.getElementById('ollama-status');

    // Check Backend/Ollama Status Logic can be added here
    statusEl.textContent = "SYSTEM_READY";
    statusEl.classList.add('connected');
    statusEl.classList.remove('pending');

    convertBtn.addEventListener('click', async () => {
        const rawJavaCode = javaInput.value.trim();
        const model = modelSelect.value;
        
        if (!rawJavaCode) {
            alert("NO_INPUT_DETECTED");
            return;
        }

        // UI State: Loading
        convertBtn.disabled = true;
        convertBtn.textContent = "PROCESSING...";
        tsOutput.value = "Establishing neural link to Ollama...";
        
        try {
            const startTime = Date.now();
            const response = await fetch('/api/convert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ rawJavaCode, model })
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error || response.statusText);
            }

            const data = await response.json();
            const endTime = Date.now();
            
            tsOutput.value = data.convertedTsCode;
            console.log(`Conversion took ${endTime - startTime}ms`);

        } catch (error) {
            console.error(error);
            tsOutput.value = `[FATAL_ERROR]: ${error.message}`;
        } finally {
            // UI State: Reset
            convertBtn.disabled = false;
            convertBtn.textContent = "EXECUTE_CONVERSION()";
        }
    });

    // Copy to Clipboard
    document.getElementById('copy-btn').addEventListener('click', () => {
        tsOutput.select();
        document.execCommand('copy');
        // Simple visual feedback could go here
    });
});
