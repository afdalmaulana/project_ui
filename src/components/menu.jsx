import { FaTshirt } from "react-icons/fa";
import { SiHomeassistant } from "react-icons/si";
import { GrYoga } from "react-icons/gr";
import { GiOpenBook } from "react-icons/gi";
import { FaHiking } from "react-icons/fa";
export default function Menu() {
  return (
    <div className="border-b-4 w-full flex justify-between px-[7rem] h-[10rem] ">
      <div className="hover:bg-green-300 w-[12rem] px-[4rem] py-[2.5rem]">
        <FaTshirt className="text-6xl text-blue-700" />
        <div>Fashion</div>
      </div>
      <div className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
        <SiHomeassistant className="text-6xl text-blue-700 ml-7" />
        <div>Home & Garden</div>
      </div>
      <div className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
        <GrYoga className="text-6xl text-blue-700 ml-7" />
        <div>Health & Beauty</div>
      </div>
      <div className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
        <GiOpenBook className="text-6xl text-blue-700 ml-7" />
        <div>Office & School</div>
      </div>
      <div className="hover:bg-green-300 w-[12rem] px-[1rem] py-[2.5rem]">
        <FaHiking className="text-6xl text-blue-700 ml-12" />
        <div>Activities & Outdoors</div>
      </div>
    </div>
  );
}
