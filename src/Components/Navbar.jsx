
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="flex justify-between px-4 py-2">
          {" "}
          {/* Adjusted padding */}
          <div className="flex items-center">
            <GiHamburgerMenu size={"24px"} />
            <img
              className="px-4"
              width={115}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
              alt=""
            />
          </div>
          <div className="flex items-center w-2/5">
            {" "}
            {/* Adjusted width and padding */}
            {/* input section */}
            <div className="w-full px-2 py-2 border border-gray-400 rounded-l-full">
              {" "}
              {/* Adjusted padding */}
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none"
              />
            </div>
            <button className="px-3 py-2 border rounded-r-full border-r-gray-400">
              <IoIosSearch size={"24px"} />
            </button>
          </div>
          <div className="flex items-center justify-between w-[10%]">
            {" "}
            {/* Adjusted width */}
            <IoIosNotificationsOutline
              size={"24px"}
              className="cursor-pointer"
            />
            <MdOutlineVideoCall size={"24px"} className="cursor-pointer" />
            <Avatar
              src="http://m.gettywallpapers.com/wp-content/uploads/2023/09/Solo-Leveling-pfp.jpg"
              size="24"
              round={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
