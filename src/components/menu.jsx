import fashion from "../../public/Fashoin.svg";
import homeGarden from "../../public/HomeGarden.svg";
import healthBeauty from "../../public/HealthandBeauty.svg";
import officeSchool from "../../public/OfficeandSchool.svg";
import activiesOutdoors from "../../public/Activities.svg";
import Image from "next/image";
export default function Menu() {
  return (
    <div className="w-full cursor-pointer flex flex-wrap desktop:flex-nowrap justify-between px-[1rem] desktop:px-[7rem] ">
      <Image
        src={fashion}
        alt="fashion"
        width={400}
        height={400}
        className="hover:bg-[#BBFD01]"
      />
      <Image
        src={homeGarden}
        alt="Home Garden"
        width={400}
        height={400}
        className="hover:bg-[#BBFD01]"
      />
      <Image
        src={healthBeauty}
        alt="Home Garden"
        width={400}
        height={400}
        className="hover:bg-[#BBFD01]"
      />
      <Image
        src={officeSchool}
        alt="Home Garden"
        width={400}
        height={400}
        className="hover:bg-[#BBFD01]"
      />
      <Image
        src={activiesOutdoors}
        alt="Home Garden"
        width={400}
        height={400}
        className="hover:bg-[#BBFD01]"
      />
    </div>
  );
}

/**
 * Create Item For The menu
 *
 * @param {Object} props
 * @param {String} props.name - The name of the menu item
 * @param {React.ReactNode} props.children - The icon of the menu item
 * @param {string} props.className - The className of the menu item
 * @param {any} props.rest
 *
 * @return {JSX.Element}
 *
 */
Menu.Item = function MenuItem({ name, children, className, ...rest }) {
  const baseClass = clsx("text-[12px]", className);
  return (
    <div className={baseClass} {...rest}>
      {children}
      <div>{name}</div>
    </div>
  );
};
