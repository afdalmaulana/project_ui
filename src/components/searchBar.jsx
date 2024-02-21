import { PiShoppingCartThin } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import fyaril from "../../public/Group.svg";
import Image from "next/image";
export default function SearchBar() {
  return (
    <div className="border-b-4 w-full h-[70px] tablet:h-[72px] flex">
      <div className="flex py-3 mobile:py-4 pl-4 pr-16 tablet:pl-12 desktop:pl-[6rem] ">
        <Image src={fyaril} alt="fyaril" className="h-[40px]" />
        <div className="relative">
          <input
            type="search"
            className="w-[200px] mobile:w-[321px] tablet:w-[475px] ml-[0.3rem] mt-1 h-[30px] text-gray-900 p-3 text-sm italic border border-blue-300 rounded-2xl mobile:rounded-2xl"
            placeholder="Search Here"
          ></input>
          <IoMdSearch className="absolute z-10 left-[178px] mobile:left-[250px] tablet:left-[448px] desktop:left-[400px] text-2xl top-[7px] text-white " />
          <button className="absolute text-white bg-blue-700 bold text-md w-[32px] h-[30px] mobile:w-[79px] left-[174px] mobile:left-[247px] tablet:left-[446px] desktop:left-[400px] top-[4px]  pl-5 rounded-lg mobile:rounded-2xl">
            <span className="hidden mobile:block text-sm">Search</span>
          </button>
        </div>
      </div>
      <div className="hidden desktop:flex text-[14px] py-6">
        <div>Start Selling Globally with Fyaril</div>
        <div className="ml-12">English</div>
        <div className="ml-6">USD</div>
        <div className="ml-6">Login</div>
        <div className="ml-6">Sign Up</div>
        <PiShoppingCartThin className="text-[30px] ml-6 mt-[-6px]" />
      </div>
      {/* <div className="absolute left-[1758px] text-3xl top-[76px] w-[30px] h-[30px]"></div> */}
    </div>
  );
}
