"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const formValidator = (content: unknown, maxLength: number): boolean => {
  return typeof content == "string" && content.length < maxLength;
};

const errorHandler = (e: unknown): string => {
  let errorMessage: string = "an error has occured :(";
  if (e instanceof Error) {
    return e.message;
  } else if (e && typeof e === "object" && "message" in e) {
    return String(e.message);
  } else if (typeof e === "string") {
    return e;
  }
  return errorMessage;
};

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const message = formData.get("message");
  const email = formData.get("email");

  if (!formValidator(name, 300)) {
    return { error: "invalid name" };
  }

  if (!formValidator(message, 5000)) {
    return { error: "invalid message" };
  }

  if (!formValidator(email, 500)) {
    return { error: "Invalid email!" };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ahmedaamir604@gmail.com",
      subject: "message",
      text: message as string,
      reply_to: email as string,
    });
  } catch (error) {
    return { error: errorHandler(error) };
  }
  return { data };
};
