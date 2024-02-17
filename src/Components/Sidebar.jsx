import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";


const SidbarIcons = [
  {
    Icons: <GoHomeFill />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions />,
    title: "Subscription",
  },
  {
    Icons: <GoHomeFill />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions />,
    title: "Subscription",
  },
  {
    Icons: <GoHomeFill />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions />,
    title: "Subscription",
  },
  {
    Icons: <GoHomeFill />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions />,
    title: "Subscription",
  },
];
const Sidebar = () => {
  return (
    <>
      <div className="ml-4 ">
        <div className="flex my-2">
          <GoHomeFill size={"24px"} />
          <p>Home</p>
        </div>

      </div>
    </>
  );
};
export default Sidebar;
