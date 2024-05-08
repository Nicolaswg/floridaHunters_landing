import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Pricing } from "@/components/Pricing/pricing";

export const HeroContent = () => {
  return (
    <div className="w-full h-full p-8 md:mt-7 lg:py-32 z-20 flex items-center justify-center">
      {/* Grid */}
      <div className="grid mt-20 lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="md:place-item-center lg:col-span-3">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-center lg:text-7xl text-white">
            Join the <span className="inline-block animate-bounce duration-1000 text-[#48bd6b]">Hunt</span>
          </h1>
          <p className="mt-3 sm:text-xl lg:text-2xl text-muted-foreground md:text-center text-gray-200">
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
        <div className="display flex flex-wrap lg:col-span-4 mt-10 lg:mt-0">
          <Pricing title={"Baseball Travel Team"} subTitle="Step up to the plate with our unbeatable pricing options. Enjoy every swing, catch, and home run." features={["30% off First Months", "3 Practice Weekly Field", "Batting Cages"]} price={200} />
          <Pricing title={"Private Lesson"} subTitle="Unlock your full potential at our premier baseball academy. Private lessons tailored to your needs." features={["Medice Ball Training", "Pocket Radar Pitching", "Video Analizy"]} price={70} />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  )
}
