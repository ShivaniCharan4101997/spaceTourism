"use client";

export default function Container({ bgType, children }) {
  return (
    <div
      className={`
        min-h-screen bg-center bg-cover bg-no-repeat pt-20 px-6 md:px-20
        bg-[url('/assets/${bgType}/background-${bgType}-mobile.jpg')]
        md:bg-[url('/assets/${bgType}/background-${bgType}-tablet.jpg')]
        lg:bg-[url('/assets/${bgType}/background-${bgType}-desktop.jpg')]
      `}
    >
      <div className="max-w-[80vw] mx-auto flex flex-col items-center md:items-start mt-16">
        {children}
      </div>
    </div>
  );
}
