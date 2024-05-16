
import { render } from "@react-email/render";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { EmailTemplate } from "@/components/template/EmailTemplate";
import toastify from "@/logic/tostify";

export const EmailForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const { name, email } = Object.fromEntries(formData)

    const emailHTML = render(
      <EmailTemplate
        userName={name.toString()}
        company="Florida Hunters Academy"
        companyEmail="floridahuntersbaseball@gmail.com"
        location={{ state: "FL", street: "2231 Fortune Rd", city: "Kissimmee", postalCode: "34744" }}
        values={[
          {
            id: 1,
            title: "Coaching: ",
            content: "Our team of experienced coaches are not only skilled in the technical aspects of the game, but also passionate about working with children."
          },
          {
            id: 2,
            title: "Training Sessions: ",
            content: "Our structured training sessions focus on enhancing fundamental skills such as batting, pitching, fielding, base running, and overall game strategy."
          },
          {
            id: 3,
            title: "Age Groups: ",
            content: "We offer groups and individual programs for children aged 9U-13U. Each group is carefully designed to cater to specific developmental needs and challenges."
          }]}
      />,
      {
        pretty: true
      }
    )

    const plainText = render(
      <EmailTemplate
        userName={name.toString()}
        company="Florida Hunters Academy"
        companyEmail="floridahuntersbaseball@gmail.com"
        location={{ state: "FL", street: "2231 Fortune Rd", city: "Kissimmee", postalCode: "34744" }}
        values={[
          {
            id: 1,
            title: "Coaching: ",
            content: "Our team of experienced coaches are not only skilled in the technical aspects of the game, but also passionate about working with children."
          },
          {
            id: 2,
            title: "Training Sessions: ",
            content: "Our structured training sessions focus on enhancing fundamental skills such as batting, pitching, fielding, base running, and overall game strategy."
          },
          {
            id: 3,
            title: "Age Groups: ",
            content: "We offer groups and individual programs for children aged 9U-13U. Each group is carefully designed to cater to specific developmental needs and challenges."
          }]}
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
          from: "Support <no-reply@floridahuntersacademy.com>",
          to: email,
          subject: `Hi! ${name}`,
          text: plainText,
          html: emailHTML,
        }),
      })
      const data = await res.json()
      toastify(`An email has been sent to: ${email}`, "success")
      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="p-2 flex sm:flex-wrap gap-2 items-center md:flex-wrap lg:flex-row lg:gap-3 md:justify-center">
      <div className="w-full max-w-lg  lg:w-auto">
        <Label className="sr-only">Name</Label>
        <Input required placeholder="Name" type="text" name="name" ref={nameInputRef} />
      </div>
      <div className="w-full max-w-lg  lg:w-auto">
        <Label className="sr-only">Email</Label>
        <Input required placeholder="Email" type="name" name="email" ref={emailInputRef} />
      </div>
      <Button className="w-min">Learn More</Button>
    </form>
  )
}
