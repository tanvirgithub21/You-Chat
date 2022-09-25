import React from "react";
import ChatListHeader from "./SideBarComponent/ChatListHeader";
import ChatListPeople from "./SideBarComponent/ChatListPeople";
import ChatListSearch from "./SideBarComponent/ChatListSearch";

const SideBar = () => {
  return (
    <div className="flex flex-col flex-[0.25] min-w-[16rem] max-h-full p-4">
      <ChatListHeader />
      <ChatListSearch />
      <ChatListPeople />
      <ChatListPeople />
      <ChatListPeople />
      <ChatListPeople />
      <ChatListPeople />
      <ChatListPeople />
      <ChatListPeople />
      <ChatListPeople />
    </div>
  );
};

export default SideBar;
