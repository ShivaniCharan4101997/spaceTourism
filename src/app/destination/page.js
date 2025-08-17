"use client";

import { useState } from "react";
import Image from "next/image";
import data from "@/data/destination.json";
import { Barlow_Condensed } from "next/font/google";
import MainHeading from "@/components/MainHeading";
import Navbar from "@/components/Navbar";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const destinations = data.destinations;

  return (
    <>
      {/* 🔹 Background layer */}
      <div
        className="
          fixed inset-0 -z-10 
          bg-top  bg-cover bg-no-repeat  
          bg-[url('/assets/destination/background-destination-mobile.jpg')]
          md:bg-[url('/assets/destination/background-destination-tablet.jpg')]
          lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]
        "
      />

      {/* 🔹 Foreground content */}
      <Navbar />

      <div className="max-w-[80vw] mx-auto flex flex-col items-center md:items-start mt-32">
        {/* destination heading */}
        <MainHeading count="01" title="Pick your destination" />

        {/* destination image and content */}
        <div className="mt-20 grid md:grid-cols-2 place-items-center gap-24">
          <Image
            src={destinations[activeIndex].images.webp}
            alt={destinations[activeIndex].name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* content */}
          <div className="mt-4 flex flex-col gap-y-10 text-[var(--clr-light)]">
            {/* nav */}
            <nav>
              <ul className="flex space-x-8">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <button
                      className={`text-[var(--clr-light)] text-lg uppercase hover:text-[var(--clr-white)] transition duration-300 pb-2 
                        ${
                          activeIndex === index
                            ? "font-bold border-b-2 border-[var(--clr-white)]"
                            : ""
                        }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {destination.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* name */}
            <h2
              className={`${barlowCondensed.className} text-[var(--clr-white)] 
                text-xl md:text-5xl lg:text-7xl tracking-widest font-semibold uppercase`}
            >
              {destinations[activeIndex].name}
            </h2>

            {/* description */}
            <p className="text-slate-400 text-lg font-light">
              {destinations[activeIndex].description}
            </p>

            {/* line */}
            <div className="w-full h-px bg-[hsl(0_0%_100%_/_0.2)] my-8"></div>


            {/* footer */}
            <footer className="mt-4 grid grid-cols-2 items-center gap-4">
              <div>
                <h3 className="uppercase tracking-wide text-sm text-gray-400">
                  Avg. Distance
                </h3>
                <p className="text-white uppercase text-xl font-medium">
                  {destinations[activeIndex].distance}
                </p>
              </div>

              <div>
                <h3 className="uppercase tracking-tight text-sm text-gray-400">
                  Est. Travel Time
                </h3>
                <p className="text-white uppercase text-xl font-medium">
                  {destinations[activeIndex].travel}
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
