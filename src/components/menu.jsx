import clsx from "clsx";

/**
 * Menu Component
 *
 * Menu Component will be placed on the top of the page with wrap with navbar
 *
 * @param {import("react").ReactNode} children - child react node Element
 *
 * @returns {JSX.Element} 
 */
export default function Menu({ children }) {
  return (
    <div className="border-b-4 w-full flex justify-between px-[7rem] h-[10rem] ">
      {children}
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
 *
 *
 * @return {JSX.Element}
 *
 * @example 
 * // Example usage of Menu.Item component:
 * <Menu.Item name="Home" icon=<FaHiking className="text-6xl text-blue-700 ml-12" />"  />
*/
Menu.Item = ({ name, children, className = '', ...rest }) => {
  const baseClass = clsx("hover:bg-green-300", className);
  return (
    <div className={baseClass} {...rest}>
      {children}
      <div>{name}</div>
    </div>
  )
}
