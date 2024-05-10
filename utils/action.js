"use server";

import OpenAI from "openai";
import { currentUser, auth } from "@clerk/nextjs/server";
import prisma from "./db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};

export const createPost = async (text) => {
  const user = await currentUser();
  const { userId } = auth();

  return prisma.post.create({
    data: {
      content: text,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  //console.log(user);
  return null;
};

export const getAllPosts = async () => {
  return prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
