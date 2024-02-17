
// eslint-disable-next-line no-unused-vars
import React from "react";


import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
      
      return (
            <>
                  <div>
                        
                        <div className="flex items-center">
                              
                              <GiHamburgerMenu />
                              <img width={ 115} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="" />

                        </div>
                        <div>  {/* input section */}
                              <input type="text" className="border border-gray-200"/>
                        </div>
                        
                        <div>
                              <button>Search</button>
                        </div>
                 </div>
                  
            </>
      );
}

export default Navbar;