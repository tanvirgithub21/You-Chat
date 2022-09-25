import React from "react";
import ChatBoxContent from "./ChatBoxComponent/ChatBoxContent";
import ChatBoxHeader from "./ChatBoxComponent/ChatBoxHeader";

const ChatBox = () => {
  return (
    <div className="flex flex-col flex-[0.70] pt-4 pr-4">
      <ChatBoxHeader />
      <ChatBoxContent />
    </div>
  );
};

export default ChatBox;
