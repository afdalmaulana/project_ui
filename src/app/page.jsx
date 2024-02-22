import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import { Category } from "@/components/productCategory";
import SearchBar from "@/components/searchBar";
import { WorkFlow } from "@/components/workFlow";
import { DevGoals } from "@/fixtures/devGoals";

import { FixturesMenu } from "@/fixtures/menu";

//TODO: the icons are not showing up

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <FixturesMenu />
      <Banner />
      <WorkFlow />
      <Category />
      <DevGoals />
    </>
  );
}
