import React from "react";

function CreditCardFeature({ title1, title2, subtitle, imgUrl }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex relative py-6">
      <div className="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
        <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
          {title1}
          <span className="uni-gradient-primary">
            <br />
            {title2}
          </span>
        </p>
        <p className="text-[#BFC9CC] text-[14px] md:text-2xl">{subtitle}</p>
      </div>
      <div className="m-auto w-full md:w-[450px] h-auto md:flex-[50%]">
        <img
          src={`/images/${imgUrl}`}
          alt=""
          loading="lazy"
          className="m-auto w-[80%] h-auto css-1e2fy0l"
        />
      </div>
    </div>
  );
}

export default CreditCardFeature;
