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
import { DevGoals } from "@/fixtures/devGoals";

export const goalsData = [
  { image: noPoverty, title: "No Poverty" },
  { image: zeroHunger, title: "Zero Hunger" },
  { image: goodHealth, title: "Good Health" },
  { image: qualityEducation, title: "Quality Education" },
  { image: qualityGender, title: "Quality Gender" },
  { image: cleanWater, title: "Clean Water" },
  { image: cleanEnergi, title: "Clean Energy" },
  { image: economic, title: "Economic Growth" },
  { image: innovation, title: "Innovation" },
  { image: reducedInequalities, title: "Reduced Inequalities" },
  { image: sustainable, title: "Sustainable Cities" },
  { image: responsible, title: "Responsible Consumption" },
];
export const GoalsComponent = () => {
  return <DevGoals data={goalsData} />;
};
