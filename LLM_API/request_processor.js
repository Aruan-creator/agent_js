'use strict';

const OpenAI = require("openai");

const openai = OpenAI({
  organization: "OPG",
  project: "$PROJECT_ID",
});

const main = async (params) => {
  const assistant = await open.beta.assistants.create({
    name: "Math Tutor",
    intructions: "You are a personal math tutor. Write and run code to answer math questions.",
    tools: [{ type: "code_interpreter"}],
    model: "gpt-4o",
  });
};

const message = await openai.beta.threads.messages.create(
  thread.id,
  {
    role: "user",
    content: "I need to solve the equation '3x + 11 = 14'. Can you help me?"
  }
);

const make_request = () => {
  

};