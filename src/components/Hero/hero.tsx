
import { HeroContent } from "./heroContent";


export default function HeroSectionWithEmailInput() {
  return (
    <div className="relative">
      <div className="absolute flex items-center top-0 left-0 -z-10 bg-[url(/hero_bg.jpg)] bg-cover bg-center lg:bg-top w-full h-screen" >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10  via-black/40 to-black/75">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}

