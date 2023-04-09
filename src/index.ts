import { askQuestion } from "./openai/api";

const main = async (argv: string[]) => {
  if (process.argv.length !== 3) {
    console.error("Usage: ts-node src/index.ts <question>");
    process.exit(1);
  }

  const question = argv[2];
  const choices = await askQuestion(question);

  choices.forEach((choice) => console.log(choice.message?.content));
};

main(process.argv);
