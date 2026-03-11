const { GoogleGenAI } = require("@google/genai");

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Gemini API key not configured" }),
    };
  }

  try {
    const { message } = JSON.parse(event.body);
    if (!message || !message.trim()) {
      return { statusCode: 400, body: JSON.stringify({ error: "Message is required" }) };
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
      config: {
        systemInstruction:
          "You are the ATSFY Core Intelligence Layer, the central AI brain of a multi-startup ecosystem. Your goal is to provide intelligent insights across Education, Knowledge Management, Hiring (ATSfy), Startup Validation (StartupLens), and Finance (Finance XAI). Be professional, technical, and visionary. Mention how different parts of the ecosystem can work together if relevant.",
      },
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: response.text || "I'm processing that through our core intelligence layer..." }),
    };
  } catch (error) {
    console.error("Gemini API error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to get AI response" }),
    };
  }
};
