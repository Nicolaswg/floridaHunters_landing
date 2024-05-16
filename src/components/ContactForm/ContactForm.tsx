import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useRef } from "react"

export const ContactForm = () => {

  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLInputElement>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const subjectInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {

  }

  return (

    <form onSubmit={handleSubmit} className="p-2 flex sm:flex-wrap gap-2 items-center md:flex-wrap lg:flex-row lg:gap-3 md:justify-center">
      <div className="w-full max-w-lg  lg:w-auto">
        <Label className="sr-only">Name</Label>
        <Input required placeholder="Name" type="text" name="name" />
      </div>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label className="sr-only">Email</Label>
        <Input required placeholder="Email" type="name" name="email" />
      </div>
      <Button className="w-min">Get in Touch</Button>
    </form>
  );
};
