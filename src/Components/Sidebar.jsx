import { FiHome } from "react-icons/fi";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
export default function Sidebar() {
  return (
        <>
              <div className="ml-4">
                    
                    <div className="flex my-1 ">
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
                    </div>
        </div>
        
        </>
  )
}
