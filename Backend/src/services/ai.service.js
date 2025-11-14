const { GoogleGenAI } = require ("@google/genai");

const ai = new GoogleGenAI({});

async function genrateResponse(chatHistory) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:chatHistory
  });
  return response.candidates[0].content.parts[0].text // if this line not use you dont get response 

}

module.exports  = genrateResponse