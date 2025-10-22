import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
const ai = new GoogleGenerativeAI("YOUR_API_KEY_HERE");

async function main() {
  const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent(
    "Greet me with a poem about Jupiter in the style of Shakespeare."
  );
  
  document.getElementById("output").textContent = result.response.text();
}

main().catch(err => {
  document.getElementById("output").textContent = "Error: " + err.message;
  console.error(err);
});
