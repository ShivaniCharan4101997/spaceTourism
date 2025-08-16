"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/crew.json";
import Navbar from "@/components/Navbar";
import MainHeading from "@/components/MainHeading";

const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const crew = data.crew;

  return (
    <>
      {/* 🔹 Background */}
      <div
        className="
          fixed inset-0 -z-10
          bg-top bg-cover bg-no-repeat  
          bg-[url('/assets/crew/background-crew-mobile.jpg')]
          md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
          lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]
        "
      />

      {/* 🔹 Navbar */}
      <Navbar />

      <div className="max-w-[80vw] mx-auto mt-22">
        {/* Heading */}
        <MainHeading count="02" title="Meet your crew" />

        <div className="grid md:grid-cols-2 place-items-center gap-16 mt-10">
          {/* Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={crew[activeIndex].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
              >
                <h3 className="uppercase text-gray-400 text-xl md:text-2xl">
                  {crew[activeIndex].role}
                </h3>
                <h2 className="text-white text-3xl md:text-5xl uppercase font-light">
                  {crew[activeIndex].name}
                </h2>
                <p className="text-slate-400 text-lg font-light whitespace-normal break-words leading-relaxed max-w-xl">
  {crew[activeIndex].bio}
</p>

              </motion.div>
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="flex gap-4 mt-6">
              {crew.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-4 h-4 rounded-full transition ${
                    activeIndex === index
                      ? "bg-white"
                      : "bg-gray-500 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Crew Image */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={crew[activeIndex].images.webp}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={crew[activeIndex].images.webp}
                  alt={crew[activeIndex].name}
                  width={400}
                  height={500}
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
