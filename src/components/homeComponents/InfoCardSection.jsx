import { infoCardData } from "../../commonRequirements/constants";
import Infocard from "../InfoCard";

export default function InfoCardSection() {
  return (
    <section className="py-12 lg:py-[100px] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex md:justify-between">
        {infoCardData.map((data) => (
          <Infocard {...data} />
        ))}
      </div>
    </section>
  );
}
