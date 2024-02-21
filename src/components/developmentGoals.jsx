import Image from "next/image";
import noPoverty from "../../public/noPoverty.svg";
import zeroHunger from "../../public/zeroHunger.svg";
import goodHealth from "../../public/goodHealth.svg";
import qualityEducation from "../../public/qualityEducation.svg";
import qualityGender from "../../public/qualityGender.svg";
import cleanWater from "../../public/cleanWater.svg";
export const Goals = () => {
  return (
    <div className="w-full text-center">
      <div className=" desktop:py-8 desktop:text-2xl desktop:font-semibold">
        Our sustainable development goals
      </div>
      <div className="flex justify-center">
        <div className="flex gap-2 px-10 desktop:gap-10 flex-wrap desktop:flex-nowrap ">
          <Image src={noPoverty} alt="noPoverty" width={150} height={150} />
          <Image src={zeroHunger} alt="Zero" width={150} height={150} />
          <Image src={goodHealth} alt="health" width={150} height={150} />
          <Image src={qualityEducation} alt="Zero" width={150} height={150} />
          <Image src={qualityGender} alt="Zero" width={150} height={150} />
          <Image src={cleanWater} alt="Zero" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};
