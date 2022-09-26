import React from "react";
import ChatText from "./ChatText";

const ChatBoxContent = () => {
  return (
    <div className="h-full">
      <div className="px-[10%] h-full overflow-y-auto bg-[#EFEAE2]">
        <ChatText messesType={"receiver"} />
        <ChatText />
        <ChatText />
        <ChatText messesType={"receiver"} />
        <ChatText />
        <ChatText />
        <ChatText messesType={"receiver"} />
        <ChatText />
      </div>
    </div>
  );
};

export default ChatBoxContent;
