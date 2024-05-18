
import { Pricing } from "@/components/Pricing/Pricing";
import { EmailForm } from '@/components/Email/EmailForm';

export const HeroContent = () => {
  return (
    <div className="w-full h-full p-8 bg-[url(/hero_bg.webp)] bg-cover bg-center bg-no-repeat lg:bg-top lg:py-32 flex items-center justify-center">
      {/* Grid */}
      <div className="box-border z-10 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className=" gap-4 mb-2 p-8 flex md:py-12 flex-col justify-center items-center mt-[100px] md:mt-0 lg:col-span-3 bg-gray-700/65 rounded-lg">
          <h1 className="text-4xl font-extrabold tracking-tight text-white scroll-m-20 sm:text-center lg:text-7xl">
            Join the <span className="inline-block animate-bounce duration-1000 text-[#48bd6b]">Hunt</span>
          </h1>
          <p className="text-white sm:text-xl lg:text-2xl md:text-center semibold">
            Offering top-notch training and development for aspiring athletes. Unleash your potential on the diamond with us.
          </p>
          <EmailForm />
        </div>
        {/* End Col */}
        <div className="flex flex-wrap lg:col-span-4 lg:mt-0">
          <Pricing billed="monthly" lessonType="Team" title={"Baseball Travel Team"} subTitle="Step up to the plate with our unbeatable pricing options. Enjoy every swing, catch, and home run." features={["30% off First Months", "3 Practice Weekly Field", "Batting Cages"]} price={200} />
          <Pricing billed="hourly" lessonType="Private" title={"Private Lesson"} subTitle="Unlock your full potential at our premier baseball academy. Private lessons tailored to your needs." features={["Medice Ball Training", "Pocket Radar Pitching", "Video Analizy"]} price={50} />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  )
}
