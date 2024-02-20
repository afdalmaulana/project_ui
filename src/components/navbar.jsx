import clsx from "clsx";
export default function Navbar() {
  return (
    <Box>
      <div className="py-3 text-gray-500">
        <div className="font">Location</div>
      </div>
      <div className="flex justify-between py-3 px-12 text-gray-500 ">
        <div className="mr-5">Our Blog</div>
        <div className="mr-5">Track Shipment</div>
        <div className="mr-5">Creating Global Impact</div>
        <div className="mr-5">Gift Certificate</div>
      </div>
    </Box>
  );
}

const Box = ({ children }) => {
  const baseClass =
    "border-b-2 border-gray-300 bg-neutral-100 w-full h-13 flex justify-between px-5";

  const margeClass = clsx(baseClass, {});
  return (
    <>
      <div className={margeClass}>{children}</div>
    </>
  );
};
