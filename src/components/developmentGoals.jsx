import Image from "next/image";
import noPoverty from "../../public/noPoverty.svg";
import zeroHunger from "../../public/zeroHunger.svg";
import goodHealth from "../../public/goodHealth.svg";
import qualityEducation from "../../public/qualityEducation.svg";
import qualityGender from "../../public/qualityGender.svg";
import cleanWater from "../../public/cleanWater.svg";
import cleanEnergi from "../../public/cleanEnergi.svg";
import economic from "../../public/economic.svg";
import innovation from "../../public/innovation.svg";
import sustainable from "../../public/sustainable.svg";
import responsible from "../../public/responsible.svg";
import reducedInequalities from "../../public/reducedInequalities.svg";
export const Goals = () => {
  return (
    <div className="w-full text-center">
      <div className=" desktop:py-8 desktop:text-4xl desktop:font-semibold">
        Our sustainable development goals
      </div>
      {/* <div className="flex gap-2 justify-center align-center flex-wrap desktop:gap-12"> */}
      <div className="flex py-2">
        <div className="grid grid-cols-2 gap-4 tablet:grid-cols-4 desktop:grid-cols-6 gap:3 desktop:gap-10 mx-auto">
          <Image src={noPoverty} alt="noPoverty" width={150} height={150} />
          <Image src={zeroHunger} alt="Zero" width={150} height={150} />
          <Image src={goodHealth} alt="health" width={150} height={150} />
          <Image src={qualityEducation} alt="Zero" width={150} height={150} />
          <Image src={qualityGender} alt="Zero" width={150} height={150} />
          <Image src={cleanWater} alt="Zero" width={150} height={150} />
          <Image src={cleanEnergi} alt="Zero" width={150} height={150} />
          <Image src={economic} alt="Zero" width={150} height={150} />
          <Image src={innovation} alt="Zero" width={150} height={150} />
          <Image
            src={reducedInequalities}
            alt="Zero"
            width={150}
            height={150}
          />
          <Image src={sustainable} alt="Zero" width={150} height={150} />
          <Image src={responsible} alt="Zero" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};
