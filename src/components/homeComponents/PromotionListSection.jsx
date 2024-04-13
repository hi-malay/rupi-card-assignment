import React from "react";
import PromotionBanner from "../PromotionBanner";
import { promotionList } from "../../commonRequirements/constants";

function PromotionListSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-4 px-8">
      <div className="flex justify-center flex-col">
        {promotionList.map((data, index) => (
          <PromotionBanner key={index} {...data} />
        ))}
        <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
          <p>
            Lifetime <span className="text-uni-green">free. </span>
            <span className="block sm:inline-block md:text-center">
              No joining fee.
            </span>
            <span className="block md:text-center">No annual charges. </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PromotionListSection;
