
// const Hero = () => {
//   return (
//     <>
//       {/* Hero */}
//       <div className="h-[800px] flex justify-center items-center relative overflow-hidden py-24 lg:py-32
//       bg-[url('/hero_bg2.jpg')] bg-origin-padding  bg-no-repeat bg-cover bg-center bg-fixed pt-8">
//         <div className="px-4 flex flex-col justify-center items-center sm:px-6 sm:w-[450px] md:w-[650px] lg:w-[950px] lg:px-8  bg-white/20 backdrop-blur-md rounded-lg">
//           <div className="container flex flex-col py-10 lg:py-16 ">
//             <div className="max-w-2xl text-center mx-auto">
//               <p className="">Unleash Your Inner athelete</p>
//               {/* Title */}
//               <div className="mt-5 max-w-2xl">
//                 <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
//                   <span className="inline-block animate-bounce duration-1000">J</span>
//                   oin the Hunt
//                 </h1>
//               </div>
//               {/* End Title */}
//               {/* Buttons */}
//               <div className="mt-8 gap-3 flex flex-col items-center md:flex-row">
//                 <Button size={"lg"}>Get started</Button>
//                 <Button size={"lg"} variant={"outline"}>
//                   Learn more
//                 </Button>
//               </div>
//               {/* End Buttons */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Hero */}
//     </>
//   );
// }
// export default Hero

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Pricing } from "../Pricing/pricing";

export default function HeroSectionWithEmailInput() {
  const isAtest = () => {
    console.log("test")
  }
  return (
    <>

      {/* Hero */}
      <div className="w-full p-8 lg:py-32 bg-gray-200">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="md:place-item-center lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-center lg:text-5xl">
              Join the <span className="inline-block animate-bounce duration-1000 text-white bg-gradient-to-r from-[#94F7F6]">Hunt</span>
            </h1>
            <p className="mt-3 text-xl text-muted-foreground md:text-center">
              Offering top-notch training and development for aspiring athletes. Unleash your potential on the diamond with us.
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3 md:justify-center">
              <div className="w-full max-w-lg  lg:w-auto">
                <Label className="sr-only">Email</Label>
                <Input placeholder="Enter your email" type="email" />
              </div>
              <Button className="w-min" onClick={isAtest}>Get in Touch</Button>
            </div>
          </div>
          {/* End Col */}
          <div className="display flex flex-wrap lg:col-span-4 mt-10 lg:mt-0">
            <Pricing title={"Personal Pro"} subTitle="For professionals who use Notion to write, collaborate, plan,
            and grow on Twitter." features={["Unlimited tweets", "Unlimited threads", "Real-time analytics", "collaborate with unlimited users"]} price={9.99} />
            <Pricing title={"Personal Pro"} subTitle="For professionals who use Notion to write, collaborate." features={["Unlimited tweets", "Unlimited threads", "Real-time analytics", "collaborate with unlimited users"]} price={9.99} />

          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}

