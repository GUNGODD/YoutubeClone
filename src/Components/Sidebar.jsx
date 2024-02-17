import { FiHome } from "react-icons/fi";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";


const SidebarItems = [
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      }, {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
       {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      }, {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      },
      {
            icons: <FiHome size={"24px"} />,
            title: "Home"
      },
      {
            icons: < SiYoutubeshorts size={"24px"} />,
            title: "Shorts"
      },
      {
            icons: <MdOutlineSubscriptions size={"24px"} />,
            title: "Subscriptions"
      }


]


export default function Sidebar() {
  return (
        <>
              <div className="  fixed *:relative left-0 w-auto p-5 ml-6 overflow-y-scroll h-verflow-x-hidden h-[calc(100vh-4.625rem)] bg-white">
                  
    {SidebarItems.map((item, index) => {
        return (
              <div className="flex my-4" key={index}>
                   
                {item.icons}
                <p className="pl-5">{item.title}</p>
              </div>
              
        );
    })}
</div>
                    
        
        
        </>
  )
}



{/* <div className="flex my-1 ">
                          <FiHome size={"24px"}/>
                          <p>Home</p>
                    </div>

                    <div className="flex my-1 ">
                          <SiYoutubeshorts size={"24px"}/>
                          <p>Short</p>
                    </div>

                    <div className="flex my-1 ">
                          < MdOutlineSubscriptions  size={"24px"}/>
                          <p>Subscription</p>
                    </div>*/}