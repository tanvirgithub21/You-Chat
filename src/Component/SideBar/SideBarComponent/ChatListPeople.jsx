import { Avatar } from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./SideBar.css";

const ChatListPeople = () => {
  return (
    <div className="peopleBox flex justify-start items-center p-2 border-b-2 overflow-hidden hover:bg-[#F0F2F5] ease-in-out duration-150 cursor-pointer">
      {/* Avatar  */}
      <div>
        <Avatar
          alt="Remy Sharp"
          src="https://i.pinimg.com/564x/e2/46/4a/e2464a7027458279370c1f3a9a9f9c21.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
      {/* Avatar Description */}
      <div className="flex w-full ml-2 justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-medium text-[17px] text-gray-900">
            Tanvir Ahmed
          </h3>
          <span className="text-[14px] text-gray-500">Lest message</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-500 text-[16px]">09/03/22</span>
          <ExpandMoreIcon className="downArrow ml-auto relative left-10 ease-in-out duration-300 text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default ChatListPeople;
