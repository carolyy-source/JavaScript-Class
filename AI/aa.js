// 互動式

import { input } from "@inquirer/prompts";
import ora from "ora";

let question = await input({ message: "->" });
while (question.trim() != "") {
  if (question == "exit") {
    break;
  }
  console.log(question);

  question = await input({ message: "->" });
}

const spinner = ora("思考中");

const q1 = await input({ message: "你叫什麼名字？" });
const q2 = await input({ message: "今年幾歲？" });

spinner.start();
setTimeout(() => {
  spinner.stop();
  console.log(q1, q2);
}, 3000);
