import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function main() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({
            contents:[
                {
                parts:[{text:prompt}]
                }
            ]
            })
            }
            );
    

    const data = await response.json();

    const output = data.candidates[0].content.parts[0].text;

    p.textContent = output;
    salaryElement.textContent = `${inputElements[0].value}`;
    expensesElement.textContent = `${inputElements[1].value}`;
}

main();