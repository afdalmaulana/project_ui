import Menu from "@/components/menu"

export const FixturesMenu = () => {
  return (
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
  )
}
