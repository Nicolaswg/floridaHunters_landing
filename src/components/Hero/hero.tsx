

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

      <section id="hero" className="relative flex flex-col w-full h-full  lg:h-screen   sm:bg-transparent">
        <div className="absolute top-0 left-0 bg-gradient-to-t from-slate-900  via-slate-800/50 to-slate-200/20 inset-0" />
        <HeroContent />
      </section>
    </>

  );
}

