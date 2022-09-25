import React from "react";
import ChatListHeader from "./SideBarComponent/ChatListHeader";

const SideBar = () => {
  return (
    <div className="flex flex-col flex-[0.25] min-w-[16rem] p-4">
      <ChatListHeader />
    </div>
  );
};

export default SideBar;
