import b2c from "../../public/b2c.svg";
import b2b2c from "../../public/b2b2c.svg";
import Image from "next/image";

export const WorkFlow = () => {
  return (
    <div className="w-full text-center px-14 ">
      <div className="text-xl tablet:text-2xl desktop:text-4xl">
        How Does Fyaril Work?
      </div>
      <div className="flex flex-wrap desktop:flex-nowrap gap-[5rem] mt-10">
        {/* <div className="bg-green-500 w-[100%] desktop:w-[50%] rounded-3xl"> */}
        <Image src={b2c} alt="b2c" className="rounded-3xl shadow-2xl" />
        <Image src={b2b2c} alt="b2b2c" className="rounded-3xl shadow-2xl" />
        {/* </div> */}
        {/* <div className="bg-blue-500 w-[100%] desktop:w-[50%] h-[400px] rounded-3xl"></div> */}
      </div>
    </div>
  );
};
