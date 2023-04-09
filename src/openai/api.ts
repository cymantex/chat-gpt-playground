import { Configuration, OpenAIApi } from "openai";
import { ModelId } from "./types";

const model: ModelId = "gpt-3.5-turbo";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

export const askQuestion = async (prompt: string) => {
  return openai
    .createChatCompletion({
      model,
      messages: [
        {
          content: prompt,
          role: "user",
        },
      ],
    })
    .then((response) => response.data.choices);
};
