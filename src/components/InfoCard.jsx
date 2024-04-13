import React from "react";

function Infocard({ imgUrl, title, subtitle, isReversed }) {
  return (
    <div
      className={`flex ${
        isReversed && "flex-row-reverse"
      } w-full items-center md:flex-col md:max-w-xs my-12 md:my-0`}
    >
      <div className="flex-[50%] flex-shrink-0 flex w-full">
        <div className="w-full h-36 relative">
          <img
            className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
            src={`/images/${imgUrl}`}
            alt=""
          />
        </div>
      </div>
      <div className="flex-[50%] flex flex-col">
        <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
          {title}
        </p>
        <p className="text-sm text-gray-4 mt-2 md:text-lg">
          <span>{subtitle}</span>
        </p>
      </div>
    </div>
  );
}

export default Infocard;
