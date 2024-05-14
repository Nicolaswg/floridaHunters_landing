

import { HeroContent } from "@/components/Hero/HeroContent";
import { ToastContainer } from 'react-toastify';

export default function HeroSectionWithEmailInput() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      <section id="hero" className="flex flex-col w-full h-full  lg:h-screen  bg-gradient-to-b from-black/45  via-black/50 to-black/80 sm:bg-transparent">
        <HeroContent />
      </section>
    </>

  );
}

