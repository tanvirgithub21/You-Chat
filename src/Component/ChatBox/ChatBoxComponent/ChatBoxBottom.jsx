import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";

const ChatBoxBottom = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="bg-[#F0F2F5] px-4 py-2 flex items-center">
      {/* emoji and attach icon */}
      <div className="flex items-center">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
      </div>

      {/* Chat input  */}
      <div className="p-2 bg-white rounded-lg w-full mx-2 relative">
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          className="w-full bg-transparent border-none outline-none"
        />
        <div className="w-2 h-2 bg-green-500 rounded-full absolute right-2 bottom-2"></div>
      </div>

      {/* voice icon and message sent */}
      <div>
        <IconButton>{message ? <SendIcon /> : <MicIcon />}</IconButton>
      </div>
    </div>
  );
};

export default ChatBoxBottom;
