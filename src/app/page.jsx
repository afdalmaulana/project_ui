"use client";
import Banner from "@/components/banner";
import { Goals } from "@/components/developmentGoals";
import Navbar from "@/components/navbar";
import { Category } from "@/components/productCategory";
import SearchBar from "@/components/searchBar";
import { WorkFlow } from "@/components/workFlow";
import { FixturesMenu } from "@/fixtures/Menu";

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
      <Goals />
    </>
  );
}
