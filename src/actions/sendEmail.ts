"use server";

import { getErrorMessage, validateString } from "@/lib/utiils";
import { Resend } from "resend";
import ContactFormEmail from "../lib/contact-form-email";
import React from "react";
const resend = new Resend(process.env.RESEND_API_kEY);

export const sendEmail = async (formData: FormData) => {
  let data;
  try {
    const text = formData.get("message");
    const senderEmail = formData.get("email");

    if (!validateString(text, 500)) return { error: "Invalid message." };

    if (!validateString(senderEmail, 2000)) return { error: "Invalid Email." };

    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev3>",
      to: "muhsinanissar9193@gmail.com",
      subject: "Message from you portfolio.",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: text as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
  return { data };
};
