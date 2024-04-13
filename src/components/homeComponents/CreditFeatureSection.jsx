import { creditFeatureData } from "../../commonRequirements/constants";
import CreditCardFeature from "../CreditCardFeature";

export default function CreditFeatureSection() {
  return (
    <section className="py-12 lg:py-[100px] bg-black py-8 relative">
      <img
        src="/images/circles.png"
        alt="circles"
        className="absolute top-0 h-auto w-[70%]"
      />
      {creditFeatureData.map((data) => (
        <CreditCardFeature {...data} />
      ))}
    </section>
  );
}
