import { askQuestion, generateCode } from "./openai/api";

const main = async () => {
  //console.log(await askQuestion("What should I eat for dinner?"));

  console.log(await generateCode("Generate a single Java function using a IllegalArgumentException")
    .catch((error) => console.error(error.response.data)));
};

main();
