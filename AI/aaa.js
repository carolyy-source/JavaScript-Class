import { GoogleGenAI } from "@google/genai";
import { input } from "@inquirer/prompts";
import ora from "ora";

const ai = new GoogleGenAI({});
const spinner = ora("思考中..");

const chatHistory = [
  { role: "user", parts: [{ text: "今天天氣如何？" }] },
  { role: "model", parts: [{ text: "會下大雨" }] },
];

let question = await input({ message: "->" });
while (question.trim() != "") {
  if (question == "exit") {
    break;
  }

  chatHistory.push({ role: "user", parts: [{ text: question }] });

  spinner.start();
  const resp = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: chatHistory,
    config: {
      systemInstruction: "回答一律使用台灣繁體中文",
    },
  });
  spinner.stop();

  chatHistory.push({ role: "model", parts: [{ text: resp.text }] });
  console.log(chatHistory);

  console.log(resp.text);

  question = await input({ message: "->" });
}
