import React from "react";
import ChatListHeader from "./SideBarComponent/ChatListHeader";
import ChatListSearch from "./SideBarComponent/ChatListSearch";

const SideBar = () => {
  return (
    <div className="flex flex-col flex-[0.25] min-w-[16rem] p-4">
      <ChatListHeader />
      <ChatListSearch />
    </div>
  );
};

export default SideBar;
