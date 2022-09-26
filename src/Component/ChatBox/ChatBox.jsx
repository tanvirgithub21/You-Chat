import React from "react";
import ChatBoxBottom from "./ChatBoxComponent/ChatBoxBottom";
import ChatBoxContent from "./ChatBoxComponent/ChatBoxContent";
import ChatBoxHeader from "./ChatBoxComponent/ChatBoxHeader";

const ChatBox = () => {
  return (
    <div className="flex flex-col flex-[0.70]">
      <ChatBoxHeader />
      <ChatBoxContent />
      <ChatBoxBottom />
    </div>
  );
};

export default ChatBox;
