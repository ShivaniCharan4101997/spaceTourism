import React from "react";

const MainHeading = ({ count, title }) => {
  return (
    <h1 className="text-[var(--clr-white)] text-2xl md:text-3xl lg:text-4xl text-center uppercase tracking-wider md:text-start font-medium ">
      <span className="text-gray-500 mr-3">{count}</span> {title}
    </h1>
  );
};

export default MainHeading;
