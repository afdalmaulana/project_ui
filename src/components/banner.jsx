import { FaArrowRightLong } from "react-icons/fa6";
export default function Banner() {
  return (
    <div className="w-full px-[6rem] py-[10rem] ">
      <div className="text-blue-700 text-7xl font-semibold">
        Buy Local Sell Global
      </div>
      <div className="ml-12 mt-10 text-4xl">
        Suistainable Products for the world
      </div>
      <div className="flex">
        <div className="relative">
          <button className="text-blue-700 border rounded-xl w-[18rem] border-blue-700 px-10 py-4 mt-10">
            Explore Marketplace
          </button>
          <FaArrowRightLong className="absolute text-blue-700 text-2xl top-[3.5rem] right-[2rem]" />
        </div>
        <div className="relative">
          <button className="bg-blue-700 ml-5 w-[22rem] text-white px-10 py-4 rounded-xl mt-10">
            Access business only pricing
          </button>
          <FaArrowRightLong className="absolute text-white text-2xl top-[3.5rem] right-[2rem]" />
        </div>
      </div>
    </div>
  );
}
