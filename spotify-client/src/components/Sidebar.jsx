import React from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { VscLibrary } from "react-icons/vsc";

const links = [
  {
    to: "/",
    label: "Home",
    icon: AiOutlineHome,
  },
  {
    to: "/search",
    label: "Search",
    icon: AiOutlineSearch,
  },
];

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col gap-[10px]">
      <div className="bg-[#121212] p-[15px] rounded-lg">
        {links.map((link) => {
          return (
            <LinkComponent
              key={link.label}
              label={link.label}
              icon={link.icon}
              to={link.to}
            />
          );
        })}
      </div>
      <div className="bg-[#121212] flex-1 rounded-lg overflow-hidden">
        <div className=" px-[15px] py-[14px] flex justify-between items-center">
          <div className="flex items-center gap-[8px] group cursor-pointer">
            <VscLibrary
              className="text-[#b3b3b3] group-hover:text-white transition-all  duration-300"
              size={22}
            />{" "}
            <span className="text-[#b3b3b3] font-semibold font-poppins leading-0 mt-1 group-hover:text-white transition-all  duration-300">
              Your Library
            </span>
          </div>
          <div className="group cursor-pointer">
            <AiOutlinePlus
              className="text-[#b3b3b3] group-hover:text-white transition-all  duration-300"
              size={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LinkComponent = ({ to, label, icon: Icon }) => {
  return (
    <Link
      to={to}
      className="flex  items-center gap-[8px] group cursor-pointer hover:bg-black hover:bg-opacity-30 transition-all  duration-300 rounded-lg py-2 px-2 "
    >
      <Icon
        size={22}
        className="text-[#b3b3b3] group-hover:text-white transition-all  duration-300"
      />{" "}
      <span className="text-[#b3b3b3] font-semibold font-poppins leading-0 mt-1 group-hover:text-white transition-all  duration-300">
        {label}
      </span>
    </Link>
  );
};

export default Sidebar;
