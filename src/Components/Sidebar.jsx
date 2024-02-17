import { FiHome } from "react-icons/fi";
export default function Sidebar() {
  return (
        <>
              <div className="border-gray-800 w-[12%]  ml-4">
                    
                    <div className="flex w-[50%]  my-1 justify-between ">
                          <FiHome size={"24px"}/>
                          <p>Home</p>
                    </div>

                    <div className="flex w-[50%] my-1  justify-between ">
                          <FiHome size={"24px"}/>
                          <p>Home</p>
                    </div>

                    <div className="flex w-[50%]  my-1 justify-between ">
                          <FiHome size={"24px"}/>
                          <p>Home</p>
                    </div>
        </div>
        
        </>
  )
}
