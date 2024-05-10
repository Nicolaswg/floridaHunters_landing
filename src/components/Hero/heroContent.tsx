import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Pricing } from "@/components/Pricing/pricing";

export const HeroContent = () => {
  return (
    <div className="w-full h-full p-8 bg-[url(/hero_bg.jpg)] bg-cover bg-center bg-no-repeat lg:bg-bottom lg:py-32 flex items-center justify-center mix-blend-overlay">
      {/* Grid */}
      <div className="grid box-border mt-[5rem] lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="flex flex-col justify-center items-center mt-8 lg:col-span-3 bg-gray-700/65 p-8 rounded-lg">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-center lg:text-7xl text-white">
            Join the <span className="inline-block animate-bounce duration-1000 text-[#48bd6b]">Hunt</span>
          </h1>
          <p className="mt-3 sm:text-xl lg:text-2xl md:text-center text-white semibold">
            Offering top-notch training and development for aspiring athletes. Unleash your potential on the diamond with us.
          </p>
          <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3 md:justify-center">
            <div className="w-full max-w-lg  lg:w-auto">
              <Label className="sr-only">Email</Label>
              <Input placeholder="Enter your email" type="email" />
            </div>
            <Button className="w-min">Get in Touch</Button>
          </div>
        </div>
        {/* End Col */}
        <div className="flex flex-wrap mt-10 lg:col-span-4 lg:mt-0">
          <Pricing title={"Baseball Travel Team"} subTitle="Step up to the plate with our unbeatable pricing options. Enjoy every swing, catch, and home run." features={["30% off First Months", "3 Practice Weekly Field", "Batting Cages"]} price={200} />
          <Pricing title={"Private Lesson"} subTitle="Unlock your full potential at our premier baseball academy. Private lessons tailored to your needs." features={["Medice Ball Training", "Pocket Radar Pitching", "Video Analizy"]} price={70} />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  )
}
