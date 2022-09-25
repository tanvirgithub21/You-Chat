import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import { IconButton } from "@material-ui/core";

const ChatListSearch = () => {
  return (
    <div className="flex items-center border-b-2">
      <div className="p-2 bg-[#F0F2F5] flex items-center justify-start rounded-lg w-full">
        <SearchIcon className="mr-2" />
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full bg-transparent border-none outline-none "
        />
      </div>
      <div className="p-2 ml-1">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatListSearch;
