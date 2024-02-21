import fashion from "../../public/Fashoin.svg";
import homeGarden from "../../public/HomeGarden.svg";
import healthBeauty from "../../public/HealthandBeauty.svg";
import officeSchool from "../../public/OfficeandSchool.svg";
import activiesOutdoors from "../../public/Activities.svg";
import Image from "next/image";
import Menu from "@/components/menu";

export const FixturesMenu = () => {
  return (
    <Menu>
      <Menu.Item
        name="Fashion"
        className="hover:bg-green-300 w-[12rem] px-[4rem] py-[2.5rem]"
      >
        <Image
          src={fashion}
          alt="fashion"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </Menu.Item>
      <Menu.Item
        name="Home & Garden"
        className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]"
      >
        <Image
          src={homeGarden}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </Menu.Item>
      <Menu.Item
        name="Health & Beauty"
        className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]"
      >
        <Image
          src={healthBeauty}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
        <div>Health & Beauty</div>
      </Menu.Item>
      <Menu.Item
        name="Office & School"
        className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]"
      >
        <Image
          src={officeSchool}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </Menu.Item>
      <Menu.Item
        name="Activities & Outdoors"
        className="hover:bg-green-300 w-[12rem] px-[1rem] py-[2.5rem]"
      >
        <Image
          src={activiesOutdoors}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </Menu.Item>
    </Menu>
  );
};
