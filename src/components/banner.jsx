import { FaArrowRightLong } from "react-icons/fa6";
export default function Banner() {
  return (
    <div
      className="bg-cover w-full px-[1rem] tablet:px-[6rem] desktop:px-[7rem] py-[8rem] "
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="text-[#2269D8] text-[28px] tablet:text-[42px] desktop:text-[60px] font-semibold">
        Buy Local Sell Global
      </div>
      <div className="ml-5 desktop:ml-12 text-[14px] tablet:text-[20px] desktop:text-[32px]">
        Suistainable Products for the world
      </div>
      <div className="flex">
        <div className="relative">
          <button className="text-[#2269D8] mt-5 text-[10px] border rounded-lg w-[130px] h-[25px] tablet:w-[190px] tablet:py-2 tablet:h-[40px] tablet:text-[14px] tablet:mt-10  border-blue-700 pr-5 desktop:w-[280px] desktop:h-[50px] desktop:text-[18px] desktop:font-semibold ">
            Explore Marketplace
          </button>
          <FaArrowRightLong className="absolute text-blue-700 text-md top-[24px] left-[110px] tablet:top-[53px] tablet:left-[161px] desktop:left-[224px] desktop:font-semibold desktop:text-2xl" />
        </div>
        <div className="relative">
          <button className="bg-blue-700 mt-5 text-white text-[10px] border rounded-lg w-[170px] h-[25px] border-blue-700 pr-3 ml-1 tablet:w-[230px] tablet:py-2 tablet:h-[40px] tablet:text-[14px] tablet:mt-10 desktop:ml-5 desktop:w-[300px] desktop:h-[50px] desktop:text-[18px] desktop:font-semibold desktop:pr-8">
            Access business only pricing
          </button>
          <FaArrowRightLong className="absolute text-white text-sm top-[26px] left-[155px] tablet:top-[53px] tablet:left-[211px] desktop:left-[288px] desktop:font-semibold desktop:text-2xl " />
        </div>
      </div>
    </div>
  );
}
