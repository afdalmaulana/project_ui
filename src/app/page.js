import Banner from "@/components/banner";
import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Menu/>
      <Banner/>
    </div>
  );
}
