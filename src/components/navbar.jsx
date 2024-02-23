"use clients";
import clsx from "clsx";
import location from "../../public/location.svg";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="border-b-2 border-gray-300 bg-neutral-100 w-full h-10 flex justify-between pr-2 desktop:pr-8 pl-[1.5rem] py-1">
        <div className="text-gray-500 flex">
          <Image src={location} alt="location" className="mr-1 h-[30px]" />
          <div className="hidden desktop:block mt-2 text-[12px]">Location</div>
        </div>
        <div className="mt-1 text-2xl tablet:hidden mobile:block">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className="hidden mr-[3.5rem] desktop:flex text-[12px] mt-2">
          <div className="mr-5">Our Blog</div>
          <div className="mr-5">Track Shipment</div>
          <div className="mr-5">Creating Global Impact</div>
          <div className="mr-5">Gift Certificate</div>
        </div>
      </div>
      <div
        className={`absolute h-0 w-0 right-[35px] top-[5.25px] rotate-[90deg] border-b-[30px] border-b-[#2269D8]  border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent tablet:hidden ${
          navbar ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute right-[39px] top-[9.25px] z-20 w-[19rem] items-center bg-[#2269D8] px-12 py-8 rounded-md tablet:hidden ${
          navbar ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col text-[18px] justify-between items-center text-white tablet:hidden">
          <li className="pb-6">Our blog</li>
          <li className="pb-6">Track Shipment</li>
          <li className="pb-6">Creating Global Impact</li>
          <li className="pb-6">Gift Certificate</li>
        </ul>
      </div>
    </>
  );
}

// height:0px;
//  width:0px;
//  border-bottom:solid 120px blue;
//  border-left:solid 80px red;
//  border-right:solid 80px yellow;
