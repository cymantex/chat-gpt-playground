import {
  Configuration,
  CreateChatCompletionResponseChoicesInner,
  CreateCompletionResponseChoicesInner,
  OpenAIApi
} from "openai";
import { ModelId } from "./types";

const model: ModelId = "text-davinci-003";
const MAX_TOKENS = 4096;

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
);
export const generateCode = async (prompt: string): Promise<CreateCompletionResponseChoicesInner[]> => {
  return openai
    .createCompletion({
      model,
      prompt,
      max_tokens: MAX_TOKENS - prompt.length
    })
    .then((response) => response.data.choices);
};

export const askQuestion = async (question: string): Promise<CreateChatCompletionResponseChoicesInner[]> => {
  return openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          content: question,
          role: "user"
        }
      ],
      max_tokens: MAX_TOKENS - question.length
    })
    .then((response) => response.data.choices);
};
