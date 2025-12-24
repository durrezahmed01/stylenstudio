
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const getFashionAdvice = async (history: ChatMessage[], currentQuery: string): Promise<string> => {
  // Use a fallback or casting to avoid TS errors during the build while keeping the process.env requirement
  const apiKey = (process.env as any).API_KEY || '';
  const ai = new GoogleGenAI({ apiKey });
  
  const systemInstruction = `You are the Lead Stylist at "Style Studio", an ultra-luxury fashion boutique. 
  Your tone is sophisticated, knowledgeable, and exclusive. 
  You provide fashion advice, styling tips, and outfit recommendations based on current trends and luxury aesthetics. 
  Keep responses concise (under 100 words) and use high-fashion terminology. 
  Always use emojis sparingly but elegantly (like ✨, 👗, 🎩, 🥂). 
  The brand theme is black and gold.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: `System context: ${systemInstruction}` }] },
        ...history.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: currentQuery }] }
      ],
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text || "Pardon me, I'm currently curating a new collection. How else may I assist your style journey?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The studio is temporarily closed for a private showing. Please try again shortly.";
  }
};
