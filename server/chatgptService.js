const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config({ path: __dirname + "/.env" });

const openaiModule = require("openai");
const { Configuration, OpenAIApi } = openaiModule;
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const BASE_URL = "https://api.openai.com/v1";

const apiKey = process.env.OPENAI_API_KEY;

const testText =
  "Here are this week's five freeCodeCamp resources that are worth your time: 1. Pandas is a powerful data analysis library for Python. And in this course, freeCodeCamp instructor Santiago Basulto will teach you how to harness this power.";

const getSummary = async () => {
  //   const response = await fetch(`${BASE_URL}/completions`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${apiKey}`,
  //     },
  //     body: JSON.stringify({
  //       model: "gpt-3.5-turbo",
  //       prompt: `Summarize following text in one paragraph: ${testText}`,
  //     }),
  //   });
  //   console.log(response);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `Summarize this for me ${testText}` }],
    max_tokens: 100,
  });

  return response?.data?.choices[0]?.message;
};

exports.getSummary = getSummary;
