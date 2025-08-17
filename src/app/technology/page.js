"use client";
import { useState } from "react";
import Image from "next/image";
import data from "@/data/technology.json";
import MainHeading from "@/components/MainHeading";
import Navbar from "@/components/Navbar";

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const technologies = data.technology;

  return (
    <>
      {/* 🔹 Background layer */}
      <div
        className="
          fixed inset-0 -z-10
          bg-top  bg-cover bg-no-repeat  
          bg-[url('/assets/technology/background-technology-mobile.jpg')]
          md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
          lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]
        "
      />

      {/* 🔹 Foreground content */}
      <Navbar />

      <div className="max-w-[80vw] mx-auto mt-52">
        {/* Main Heading */}
        <MainHeading count="03" title="Space launch 101" />

        <div className="flex flex-col md:flex-row items-center justify-between p-2 gap-8">
          {/* Buttons */}
          <div className="flex md:flex-col gap-4">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-16 rounded-full border font-medium transition ${
                  activeIndex === index
                    ? "bg-white text-black"
                    : "bg-transparent text-2xl border-slate-50 text-white hover:bg-white/20 border-[1px]"
                }`}
              >
                {tech.id}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-lg text-center md:text-left space-y-3 px-10">
            <p className="text-gray-400 uppercase tracking-widest">
              The terminology...
            </p>
            <h2 className="text-5xl font-light uppercase leading-tight text-white">
              {technologies[activeIndex].name}
            </h2>
            <p className="text-slate-400 text-lg font-light">
              {technologies[activeIndex].description}
            </p>
          </div>

          {/* Images */}
          <div>
            {/* Mobile (Landscape) */}
            <Image
              src={technologies[activeIndex].images.landscape}
              alt={technologies[activeIndex].name}
              width={500}
              height={300}
              className="object-cover block md:hidden"
            />
            {/* Desktop (Portrait) */}
            <Image
              src={technologies[activeIndex].images.portrait}
              alt={technologies[activeIndex].name}
              width={500}
              height={500}
              className="object-cover hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
