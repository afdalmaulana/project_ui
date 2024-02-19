import { PiShoppingCartThin } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
export default function SearchBar() {
  return (
    <div className="border-b-4 w-full h-20 flex justify-between ">
      <div className="flex px-22 ml-24 py-5">
        <div className="text-blue-500 text-4xl">fyaril</div>
        <div className="relative">
          <input
            type="search"
            className="w-[32rem] ml-4 h-10 text-gray-900 p-3 italic border border-blue-300 rounded-3xl"
            placeholder="Search Here"
          ></input>
          <IoMdSearch className="absolute z-10 right-[3.9rem] text-3xl top-1 text-white " />
          <button className="absolute text-white bg-blue-700 bold text-lg w-[7rem] top-0 h-10 right-[-0.9000000000000004em] pl-5 rounded-3xl">
            Search
          </button>
        </div>
      </div>
      <div className="flex py-3 px-5">
        <div className="mr-[3rem] py-4">Start Selling Globally with Fyaril</div>
        <div className="mr-5 py-4">English</div>
        <div className="mr-5 py-4">USD</div>
        <div className="mr-5 py-4">Login</div>
        <div className="mr-5 py-4">Signup</div>
        <div className="mr-16 py-2 text-4xl">
          <PiShoppingCartThin />
        </div>
      </div>
    </div>
  );
}
