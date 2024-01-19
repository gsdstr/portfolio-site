import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const RESEND_API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: "gsdstr@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail,
        text: message
        // react: React.createElement(ContactFormEmail, {
        //   message: message,
        //   senderEmail: senderEmail,
        // }),
      })
    });

    if (res.ok) {
      console.log("OK");
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};