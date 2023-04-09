import { Configuration, OpenAIApi } from "openai";
import { ModelId } from "./types";

const model: ModelId = "text-davinci-003";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

export const generateCode = async (prompt: string) => {
  return openai
    .createCompletion({
      model,
      prompt,
      max_tokens: 4096 - prompt.length,
    })
    .then((response) => response.data.choices);
};

export const askQuestion = async (question: string) => {
  return openai
    .createChatCompletion({
      model,
      messages: [
        {
          content: question,
          role: "user",
        },
      ],
    })
    .then((response) => response.data.choices);
};
