import fashion from "../../public/Fashoin.svg";
import homeGarden from "../../public/HomeGarden.svg";
import healthBeauty from "../../public/HealthandBeauty.svg";
import officeSchool from "../../public/OfficeandSchool.svg";
import activiesOutdoors from "../../public/Activities.svg";
import Image from "next/image";
import Menu from "@/components/menu";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FixturesMenu = () => {
  const [fashionAppear, setFashion] = useState(false);
  const [showMenType, setMenType] = useState(false);
  const [showWomenType, setWomenType] = useState(false);
  const [showKidsType, setKidsType] = useState(false);
  return (
    <Menu>
      <Menu.Item className="hover:bg-green-300 w-[12rem] px-[4rem] py-[2.5rem]">
        <Image
          src={fashion}
          alt="fashion"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
          onMouseEnter={() => setFashion(!fashionAppear)}
        />
      </Menu.Item>
      <Menu.Item className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
        <Image
          src={homeGarden}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </Menu.Item>
      <Menu.Item className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
        <Image
          src={healthBeauty}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </Menu.Item>
      <Menu.Item className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
        <Image
          src={officeSchool}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </Menu.Item>
      <Menu.Item className="hover:bg-green-300 w-[12rem] px-[1rem] py-[2.5rem]">
        <Image
          src={activiesOutdoors}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </Menu.Item>
      <div
        className={` absolute h-0 w-0  left-[190px] desktop:left-[217px] top-[369px] desktop:top-[273px] border-b-[30px] border-white  border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent ${
          fashionAppear ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute w-[24rem] flex desktop:w-[75rem] left-[1rem] h-[26rem] z-10 bg-white top-[391px] desktop:top-[18rem] desktop:left-[7rem] rounded-lg ${
          fashionAppear ? "block" : "hidden"
        }`}
        onMouseLeave={() => setFashion(!fashionAppear)}
      >
        <div className="w-[20%] text-[14px] font-semibol py-8 px-8 border-r-2 border-black">
          <div className="border-b-2 border-black font-semibold pb-2">
            By type :
          </div>
          <div className="border-b-2 border-slate-200 font-semibold pb-2 mt-4 relative">
            Men
            <button
              className="absolute right-1 top-0 text-2xl"
              onClick={() => setMenType(!showMenType)}
            >
              {showMenType ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {/* <div
              className={`absolute right-1 top-0 text-2xl ${
                showMenType ? <IoIosArrowUp /> : <IoIosArrowDown />
              }`}
            >
              <IoIosArrowUp />
            </div> */}
          </div>
          <div className="border-b-2 border-slate-200 font-semibold pb-4 mt-4 relative">
            Women
            <button
              className="absolute right-1 top-0 text-2xl"
              onClick={() => setWomenType(!showWomenType)}
            >
              {showWomenType ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          <div className="border-b-2 border-slate-200 font-semibold pb-4 mt-4 relative">
            Kids
            <button
              className="absolute right-1 top-0 text-2xl"
              onClick={() => setKidsType(!showKidsType)}
            >
              {showKidsType ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
        </div>
      </div>
    </Menu>
  );
};
