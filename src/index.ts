import { askQuestion } from "./openai/api";

const main = async () => {
  console.log(await askQuestion("What should I eat for dinner?"));
};

main();
