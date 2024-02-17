
// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from 'react-avatar';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineVideoCall } from "react-icons/md";

const Navbar = () => {
      
      return (
            <>
                  <div >
                        <div className="flex justify-between px-5" > 
                        
                        <div className="flex items-center">
                              
                              <GiHamburgerMenu size={"24px"} />
                              <img className="px-4" width={ 115} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="" />

                        </div>
                        <div className="flex w-[40%] items-center"> {/* input section */}
    <div className="w-[100%] py-2 px-4 border border-gray-400 rounded-l-full">
        <input type="text" placeholder="Search" className="w-full outline-none" />
         </div>
    <button className="p-3 py-2 border rounded-r-full border-r-gray-400">Search</button>
</div>


                        <div className="flex items-center ">
                              <IoIosNotificationsOutline size={"23px"} />
                              <MdOutlineVideoCall size={"23px"} />
                           <Avatar src="http://m.gettywallpapers.com/wp-content/uploads/2023/09/Solo-Leveling-pfp.jpg" size="30" round={true} />
                              </div>
                              
                              </div>
                        </div>
                  
            </>
      );
}

export default Navbar;