

import { HeroContent } from "@/components/Hero/HeroContent";

export default function HeroSectionWithEmailInput() {
  return (
    <>
      <section id="hero" className="flex flex-col w-full h-full  lg:h-screen  bg-gradient-to-b from-black/45  via-black/50 to-black/80 sm:bg-transparent">
        <HeroContent />
      </section>
    </>

  );
}

