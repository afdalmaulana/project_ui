import clsx from "clsx";
import location from "../../public/location.svg";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="border-b-2 border-gray-300 bg-neutral-100 w-full h-10 flex justify-between pr-8 pl-[1.5rem] py-1">
      <div className="text-gray-500 flex">
        <Image src={location} alt="location" className="mr-1 h-[30px]" />
        <div className="hidden desktop:block mt-2 text-[12px]">Location</div>
      </div>
      <div className="hidden desktop:flex justify-between text-gray-500 mt-2 mr-[3.5rem] text-[12px]">
        <div className="mr-5">Our Blog</div>
        <div className="mr-5">Track Shipment</div>
        <div className="mr-5">Creating Global Impact</div>
        <div className="mr-5">Gift Certificate</div>
      </div>
    </div>
  );
}
