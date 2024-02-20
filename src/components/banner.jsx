import { FaArrowRightLong } from "react-icons/fa6";
export default function Banner() {
  return (
    <div className="bg-cover w-full px-[6rem] py-[10rem] ">
      <div className="text-[#2269D8] text-[80px] font-semibold">
        Buy Local Sell Global
      </div>
      <div className="ml-12 text-[40px]">
        Suistainable Products for the world
      </div>
      <div className="flex">
        <div className="relative">
          <button className="text-[#2269D8] text-[23px] border rounded-xl w-[357px] mt-[5.5rem] h-[65px] border-blue-700">
            Explore Marketplace
          </button>
        </div>
        <div className="relative">
          <button className="bg-blue-700 ml-[1rem] w-[410px] h-[65px] text-[23px] text-white rounded-xl mt-[5.5rem] pr-10">
            Access business only pricing
          </button>
        </div>
      </div>
      <FaArrowRightLong className="absolute text-blue-700 text-2xl top-[741px] left-[400px]" />
      <FaArrowRightLong className="absolute text-white text-2xl top-[741px] left-[833px]" />
    </div>
  );
}
