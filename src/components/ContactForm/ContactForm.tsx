
import { useRef } from "react";
import { render } from "@react-email/render";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { EmailTemplateClient } from "@/components/template/EmailTemplateClient";
import toastify from "@/logic/tostify";


export const ContactForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const { name, email, phone, message } = Object.fromEntries(formData)

    const emailHTML = render(
      <EmailTemplateClient
        userName={name.toString()}
        location={{ state: "FL", street: "2231 Fortune Rd", city: "Kissimmee", postalCode: "34744" }}
        company="Florida Hunters Academy"
        message={message.toString()}
        clientPhone={phone.toString()}
        clientEmail={email.toString()}
      />,
      {
        pretty: true
      }
    )

    const plainText = render(
      <EmailTemplateClient
        userName={name.toString()}
        company="Florida Hunters Academy"
        location={{ state: "FL", street: "2231 Fortune Rd", city: "Kissimmee", postalCode: "34744" }}
        message={message.toString()}
        clientPhone={phone.toString()}
        clientEmail={email.toString()}
      />,
      {
        plainText: true
      })

    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Leads <leads@floridahuntersacademy.com>",
          to: "floridahuntersbaseball@gmail.com",
          subject: `New message from ${name}`,
          text: plainText,
          html: emailHTML,
        }),
      })
      const data = await res.json()
      toastify(`Message sent, we'll get back to you shortly`, "success")
      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      phoneInputRef.current.value = "";
      messageInputRef.current.value = "";
      console.log(data)
    } catch (error) {
      toastify(`Message not sent`, "error")
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-2"
    >
      <h3 className="text-black text-3xl font-semibold py-2">Contact Form</h3>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label htmlFor="name">Name</Label>
        <Input
          required
          placeholder="ex: Mary White"
          type="text"
          id="name"
          name="name"
          ref={nameInputRef}
        />
      </div>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label htmlFor="email">Email</Label>
        <Input
          required
          placeholder="ex: example@mail.com"
          type="email"
          id="email"
          name="email"
          ref={emailInputRef}
        />
      </div>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label htmlFor="phone">Contact phone</Label>
        <Input
          required
          placeholder="Format: +9 999-999-9999"
          type="phone"
          id="phone"
          name="phone"
          pattern="^\+\d{1,3}\s\d{3}-\d{3}-\d{4}$"
          ref={phoneInputRef}
        />
      </div>
      <div>
      </div>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label htmlFor="message">Message</Label>
        <Textarea
          required
          placeholder="eg: I want to be part of Florida Hunters"
          id="message"
          name="message"
          ref={messageInputRef}
        />
      </div>
      <Button className="w-min">Send Contact</Button>
    </form>
  );
};
