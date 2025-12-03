//const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// 搭配 node --env-file=.env aaa.js使用

import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});

const resp = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: "你是誰?",
});

console.log(resp.text);
