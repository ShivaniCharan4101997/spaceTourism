import Navbar from "@/components/Navbar";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Home = () => {
  return (
    <>
      {/* 🔹 Background layer */}
      <div
        className="
          fixed inset-0 -z-10 
          bg-top  bg-cover bg-no-repeat  
          bg-[url('/assets/home/background-home-mobile.jpg')]
          md:bg-[url('/assets/home/background-home-tablet.jpg')]
          lg:bg-[url('/assets/home/background-home-desktop.jpg')]
        "
      />

      {/* 🔹 Foreground */}
      <Navbar />

      <div className="max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center mt-22 gap-12">
        <div
          className="
            text-center md:text-start
            text-[var(--clr-light)]
            flex flex-col gap-y-10
          "
        >
          <h1 className="text-2xl md:text-3xl uppercase">
            So, you want to travel to{" "}
            <span
              className="block text-7xl tracking-wide uppercase font-normal 
              md:text-9xl text-[var(--clr-white)]"
            >
              Space
            </span>
          </h1>

          <p className="text-slate-400 text-lg font-light">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>

          {/* 🔹 optional line under paragraph */}
          <div className="w-full h-px bg-[hsl(0_0%_100%_/_0.2)] my-8"></div>
        </div>

        <button
          className={`${barlowCondensed.className} mt-6 px-8 py-4 
            w-60 h-60 flex items-center justify-center 
            rounded-full bg-[var(--clr-white)] text-[var(--clr-dark)] 
            uppercase font-medium tracking-widest text-2xl md:text-4xl 
            hover:scale-105 transition`}
        >
          Explore
        </button>
      </div>
    </>
  );
};

export default Home;
