import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";


const SidbarIcons = [
  {
    Icons: <GoHomeFill size="24px" />,
    title: "Home",
  },
  {
    Icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    Icons: <MdOutlineSubscriptions size="24px" />,
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
    Icons: <MdOutlineSubscriptions size="24px" />,
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
    Icons: <MdOutlineSubscriptions size="24px" />,
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
    Icons: <MdOutlineSubscriptions size="24px" />,
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
    Icons: <MdOutlineSubscriptions size="24px" />,
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
    Icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
];
const Sidebar = () => {
  return (
    <>
              <div className="ml-4 ">
                    {
                          SidbarIcons.map((item, index) => {
                                return (
                                      <div key={ index} className="flex my-3">
                                    {item.Icons} 
                                            <p>{ item.title}</p>
                                  </div>
                                );
                                    
                          })
                    }
                    

                    
      

      </div>
    </>
  );
};
export default Sidebar;
