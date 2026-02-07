// Native fetch is available in Node.js 18+
async function checkOllama() {
  try {
    const response = await fetch('http://localhost:11434/api/tags');
    if (response.ok) {
      console.log("✅ Ollama is reachable.");
      const data = await response.json();
      console.log("Available models:", data.models.map(m => m.name).join(", "));
    } else {
      console.error("❌ Ollama returned non-200 status:", response.status);
    }
  } catch (error) {
    console.error("❌ Could not connect to Ollama. Ensure it is running on port 11434.");
    // console.error(error); // Optional verbose logging
  }
}

checkOllama();
