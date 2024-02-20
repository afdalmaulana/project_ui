import Banner from "@/components/banner";
import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchBar";

import { FaTshirt } from "react-icons/fa";
import { SiHomeassistant } from "react-icons/si";
import { GrYoga } from "react-icons/gr";
import { GiOpenBook } from "react-icons/gi";
import { FaHiking } from "react-icons/fa";

//TODO: the icons are not showing up

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Menu>
        <Menu.Item name="Fashion" className="hover:bg-green-300 w-[12rem] px-[4rem] py-[2.5rem]">
          <FaTshirt className="text-6xl text-blue-700" />
        </Menu.Item>
        <Menu.Item name="Home & Garden" className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
          <SiHomeassistant className="text-6xl text-blue-700 ml-7" />
        </Menu.Item>
        <Menu.Item name="Health & Beauty" className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
          <GrYoga className="text-6xl text-blue-700 ml-7" />
          <div>Health & Beauty</div>
        </Menu.Item>
        <Menu.Item name="Office & School" className="hover:bg-green-300 w-[11.6rem] px-[2rem] py-[2.5rem]">
          <GiOpenBook className="text-6xl text-blue-700 ml-7" />
        </Menu.Item>
        <Menu.Item name="Activities & Outdoors" className="hover:bg-green-300 w-[12rem] px-[1rem] py-[2.5rem]">
          <FaHiking className="text-6xl text-blue-700 ml-12" />
        </Menu.Item>
      </Menu>
      <Banner />
    </div>
  );
}
