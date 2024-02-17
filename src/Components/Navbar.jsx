
// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from 'react-avatar';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
      
      return (
            <>
                  <div className="fixed flex  top-0 items-center justify-center w-[100%] z-10 bg-white">
                        <div className="flex w-[96%] items-center justify-between  py-3 " > 
                        
                        <div className="flex items-center py-5">
                              
                              <GiHamburgerMenu size={"24px"} />
                              <img className="px-4" width={ 115} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="" />

                        </div>
                        <div className="flex w-[40%] items-center"> {/* input section */}
    <div className="w-[100%] py-2 px-4 border border-gray-400 rounded-l-full">
        <input type="text" placeholder="Search" className="w-full outline-none" />
         </div>
    <button className="px-4 py-2 border rounded-r-full border-r-gray-500"><IoIosSearch size={"24px"}/></button>
</div>


                        <div className="flex w-[10%] justify-between items-center ">
                              <IoIosNotificationsOutline size={"24px"}  className="cursor-pointer"/>
                              <MdOutlineVideoCall size={"24px"} className="cursor-pointer" />
                           <Avatar src="http://m.gettywallpapers.com/wp-content/uploads/2023/09/Solo-Leveling-pfp.jpg" size="24" round={true} />
                              </div>
                              
                              </div>
                        </div>
                  
            </>
      );
}

export default Navbar;