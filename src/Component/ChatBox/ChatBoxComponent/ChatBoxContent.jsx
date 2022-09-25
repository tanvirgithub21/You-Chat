import React from "react";
import ChatText from "./ChatText";

const ChatBoxContent = () => {
  return (
    <div className="px-[10%] h-full overflow-y-auto bg-[#EFEAE2]">
      <ChatText />
      <ChatText messesType={"receiver"} />
      <ChatText />
    </div>
  );
};

export default ChatBoxContent;
