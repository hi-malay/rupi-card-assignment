import { useEffect } from "react";
import { throttle } from "./commonRequirements/utils";
import HeaderBannerSection from "./components/homeComponents/HeaderBannerSection";
import SecondBannerSection from "./components/homeComponents/SecondBannerSection";
import PromotionListSection from "./components/homeComponents/PromotionListSection";
import CreditFeatureSection from "./components/homeComponents/CreditFeatureSection";
import InfoCardSection from "./components/homeComponents/InfoCardSection";
import BigBannerSection from "./components/homeComponents/BigBannerSection";
import DownloadAppBannerSection from "./components/homeComponents/DownloadAppBannerSection";
import PageFooterSection from "./components/homeComponents/PageFooterSection";
import ApplyNowFooterSection from "./components/homeComponents/ApplyNowFooterSection";

export default function Page() {
  const onScroll = throttle(() => {
    localStorage.setItem("sectionPosition", window.scrollY);
  }, 500);

  useEffect(() => {
    const storedSectionPosition = localStorage.getItem("sectionPosition");
    if (storedSectionPosition) {
      window.scrollTo({
        top: parseFloat(storedSectionPosition),
        behavior: "smooth",
      });
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <HeaderBannerSection />
      <div className="py-12 md:py-[150px] second-banner-view">
        <SecondBannerSection />
        <PromotionListSection />
      </div>
      <CreditFeatureSection />
      <InfoCardSection />
      <BigBannerSection />
      <DownloadAppBannerSection />
      <PageFooterSection />
      <ApplyNowFooterSection />
    </>
  );
}
