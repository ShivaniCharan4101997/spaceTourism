// components/PageWrapper.jsx
"use client";
import Navbar from "./Navbar";

const PageWrapper = ({ backgroundImages, children }) => {
  return (
    <>
      {/* Background */}
      <div
        className={`
          fixed inset-0 -z-10 bg-top bg-cover bg-no-repeat
          bg-[url('${backgroundImages.mobile}')]
          md:bg-[url('${backgroundImages.tablet}')]
          lg:bg-[url('${backgroundImages.desktop}')]
        `}
      />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="max-w-[90vw] mx-auto mt-22">{children}</div>
    </>
  );
};

export default PageWrapper;
