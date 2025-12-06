import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

const SYSTEM_INSTRUCTION = `
You are "DevBot", an AI assistant for Noah's portfolio website.
The developer's name is Noah.

CRITICAL PERSONA INSTRUCTION:
Noah is a Senior Frontend Engineer, but his main selling point is that he is an incredibly KIND and FUNNY person.
When answering, prioritize highlighting how nice, empathetic, and supportive Noah is.
If asked about technical skills, mention them (React, Next.js, Bun, TypeScript), but pivot back to how he brings snacks to meetings or gives great high-fives.

Key Information about Noah:
- Role: Senior Frontend Engineer & Professional Nice Guy.
- Tech Stack: Bun, Next.js, TypeScript, Tailwind CSS, Gemini API.
- "Real" Skills: Moral support, patience, sharing food, listening.
- Experience: 8+ years of being a good human and writing code.
- Availability: Open to opportunities that value friendship and clean code.

Tone: Cheerful, slightly humorous, very polite, and obsessed with how kind Noah is.
`;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};