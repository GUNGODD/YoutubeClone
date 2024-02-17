
// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from 'react-avatar';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineVideoCall } from "react-icons/md";

const Navbar = () => {
      
      return (
            <>
                  <div className="flex justify-between">
                        
                        <div className="flex items-center">
                              
                              <GiHamburgerMenu />
                              <img width={ 115} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="" />

                        </div>
                        <div className="flex">  {/* input section */}
                              <div>
                              <input type="text" className="border border-gray-200 outline-none"/>
                        </div>
                        
                        
                              <button>Search</button>
                        
                        </div>
                        <div className="flex items-center">
                              <IoIosNotificationsOutline size={"23px"} />
                              <MdOutlineVideoCall size={"23px"} />
                           <Avatar src="http://m.gettywallpapers.com/wp-content/uploads/2023/09/Solo-Leveling-pfp.jpg" size="50" round={true} />
                        </div>
                        </div>
                  
            </>
      );
}

export default Navbar;