import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ChatBoxHeader = () => {
  return (
    <div className="peopleBox flex justify-between items-center px-2 bg-gray-100 min-h-[60px] border-l-2 border-gray-300 pl-4">
      {/* avatar */}
      <div className="flex justify-start items-center">
        <Avatar
          alt="Remy Sharp"
          src="https://i.pinimg.com/564x/e2/46/4a/e2464a7027458279370c1f3a9a9f9c21.jpg"
        />
        <div className="ml-4 leading-[1.4rem]">
          <h3 className="text-[17px]">Toukir Ahmed</h3>
          <span className="text-[13px] text-gray-400">last seen 10:30 PM</span>
        </div>
      </div>

      {/* icon */}
      <div>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatBoxHeader;
