
import { render } from "@react-email/render";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { EmailTemplate } from "@/components/template/EmailTemplate";


export const EmailForm = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const { name, email } = Object.fromEntries(formData)

    const emailHTML = render(
      <EmailTemplate
        username={name.toString()}
      />,
      {
        pretty: true
      }
    )

    const plainText = render(
      <EmailTemplate
        username={name.toString()} />,
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
          from: "noreply@resend.dev",
          to: email,
          subject: `Hi! ${name}`,
          text: plainText,
          html: emailHTML,
        }),
      })
      const data = await res.json()
      console.log(typeof name)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="p-2 flex flex-col gap-2 sm:items-center sm:flex-row sm:gap-3 md:justify-center">
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
  )
}
