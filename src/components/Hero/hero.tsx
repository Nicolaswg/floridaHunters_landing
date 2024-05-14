
import EmailTemplate2 from "@/components/template/EmailTemplate2";
import { HeroContent } from "./heroContent";

export default function HeroSectionWithEmailInput() {
  return (
    <>
      <section id="hero" className="flex flex-col w-full h-full  lg:h-screen  bg-gradient-to-b from-black/45  via-black/50 to-black/80 sm:bg-transparent">
        <HeroContent />
      </section>
      <EmailTemplate2
        userName="Daniel"
        company="Florida Hunters Academy"
        companyEmail="floridahuntersbaseball@gmail.com"
        inviteFromLocation="San Diego, CA"
        values={["baseball", "football", "hockey"]}
      />
    </>

  );
}

