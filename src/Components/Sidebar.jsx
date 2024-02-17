import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const SidebarIcons = [
  {
    Icons: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions size="28px" />, // Adjusted the size to "24px"
    title: "Subscription",
  },
  {
    Icons: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions size="28px" />, // Adjusted the size to "24px"
    title: "Subscription",
  },
  {
    Icons: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions size="28px" />, // Adjusted the size to "24px"
    title: "Subscription",
  },
  {
    Icons: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions size="28px" />, // Adjusted the size to "24px"
    title: "Subscription",
  },
  {
    Icons: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions size="28px" />, // Adjusted the size to "24px"
    title: "Subscription",
  },
  {
    Icons: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions size="28px" />, // Adjusted the size to "24px"
    title: "Subscription",
  },
  // Add more items as needed
];
const Sidebar = () => {
  return (
    <>
      <div className=" relative w-auto  px-5 overflow-y-auto bg-white h-[calc(100vh-4.625rem)] oerflow-x-hidden h-ml-6">
        {SidebarIcons.map((item, index) => {
          return (
            <div key={index} className="flex my-4">
              {item.Icons}
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Sidebar;
