import { PiShoppingCartThin } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import fyaril from "../../public/Group.svg";
import Image from "next/image";
export default function SearchBar() {
  return (
    <div className="border-b-4 w-[1920px] h-[80px] top-[51px] flex">
      <div className="flex px-22 py-4 left-[162px]">
        <Image
          src={fyaril}
          alt="fyaril"
          className="h-[50px] absolute left-[162px]"
        />
        <div className="relative">
          <input
            type="search"
            className="w-[634px] ml-2 h-[40px] top-[5px] absolute left-[324px] text-gray-900 p-3 italic border border-blue-300 rounded-3xl"
            placeholder="Search Here"
          ></input>
          <IoMdSearch className="absolute z-10 left-[860px] text-3xl top-[10px] text-white " />
          <button className="absolute text-white bg-blue-700 bold text-lg w-[110px] top-[5px] h-[40px] left-[860px] pl-5 rounded-3xl">
            Search
          </button>
        </div>
      </div>
      <div className="text-[18px] top-[78px] left-[1073px] absolute">
        Start Selling Globally with Fyaril
      </div>
      <div className="flex text-[18px] top-[78px] left-[1400px] absolute">
        <div className="">English</div>
        <div className="ml-10">USD</div>
        <div className="ml-10">Login</div>
        <div className="ml-10">Signup</div>
      </div>
      <div className="absolute left-[1758px] text-3xl top-[76px] w-[30px] h-[30px]">
        <PiShoppingCartThin />
      </div>
    </div>
  );
}
