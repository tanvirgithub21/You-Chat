import React from "react";
import ChatListHeader from "./SideBarComponent/ChatListHeader";
import ChatListPeople from "./SideBarComponent/ChatListPeople";
import ChatListSearch from "./SideBarComponent/ChatListSearch";

const SideBar = () => {
  return (
    <div className="flex flex-col flex-[0.30] min-w-[16rem] max-h-screen py-4 pl-4">
      <ChatListHeader />
      <ChatListSearch />
      <div className="h-full overflow-y-auto">
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
        <ChatListPeople />
      </div>
    </div>
  );
};

export default SideBar;
