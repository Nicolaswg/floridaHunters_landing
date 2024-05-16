import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRef } from "react";

export const ContactForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2"
    >
      <h3 className="text-black text-3xl font-semibold py-2">Contact Form</h3>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label htmlFor="name">Name</Label>
        <Input
          required
          placeholder="eg: Mary White"
          type="text"
          id="name"
        />
      </div>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label htmlFor="email">Email</Label>
        <Input
          required
          placeholder="eg: example@mail.com"
          type="name"
          id="email"
        />
      </div>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label htmlFor="phone">Contact phone</Label>
        <Input
          required
          placeholder="eg: 440 123 4156"
          type="text"
          id="phone"
        />
      </div>
      <div>
      </div>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          required
          placeholder="eg: I want to be part of Florida Hunters"
          id="message"
        />
      </div>
      <Button className="w-min">Send Contact</Button>
    </form>
  );
};
