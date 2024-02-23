"use client";
import fashion from "../../public/Fashoin.svg";
import homeGarden from "../../public/HomeGarden.svg";
import healthBeauty from "../../public/HealthandBeauty.svg";
import officeSchool from "../../public/OfficeandSchool.svg";
import activiesOutdoors from "../../public/Activities.svg";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Menu() {
  const [fashionAppear, setFashion] = useState(false);
  const [showMenType, setMenType] = useState(false);
  const [showWomenType, setWomenType] = useState(false);
  const [showKidsType, setKidsType] = useState(false);
  return (
    <>
      <div className="w-full cursor-pointer flex flex-wrap desktop:flex-nowrap justify-between px-[1rem] desktop:px-[7rem] ">
        <button onClick={() => setFashion(!fashionAppear)}>
          <Image
            src={fashion}
            alt="fashion"
            width={400}
            height={400}
            className="hover:bg-[#BBFD01]"
          />
        </button>
        <Image
          src={homeGarden}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
        <Image
          src={healthBeauty}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
        <Image
          src={officeSchool}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
        <Image
          src={activiesOutdoors}
          alt="Home Garden"
          width={400}
          height={400}
          className="hover:bg-[#BBFD01]"
        />
      </div>
      <div
        className={` absolute h-0 w-0  left-[190px] desktop:left-[217px] top-[369px] desktop:top-[273px] border-b-[30px] border-white  border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent ${
          fashionAppear ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute w-[24rem] flex desktop:w-[75rem] left-[1rem] h-[26rem] z-10 bg-white top-[391px] desktop:top-[18rem] desktop:left-[7rem] rounded-lg ${
          fashionAppear ? "block" : "hidden"
        }`}
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
        <div className="w-[80%] h-[1px] bg-black"></div>
      </div>
    </>
  );
}

/**
 * Create Item For The menu
 *
 * @param {Object} props
 * @param {String} props.name - The name of the menu item
 * @param {React.ReactNode} props.children - The icon of the menu item
 * @param {string} props.className - The className of the menu item
 * @param {any} props.rest
 *
 * @return {JSX.Element}
 *
 */
Menu.Item = function MenuItem({ name, children, className, ...rest }) {
  const baseClass = clsx("text-[12px]", className);
  return (
    <div className={baseClass} {...rest}>
      {children}
      <div>{name}</div>
    </div>
  );
};
