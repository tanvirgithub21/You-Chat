import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const ChatText = ({ messesType }) => {
  return (
    <div
      className={`chatText px-2 py-1 my-2 w-fit rounded-md relative ${
        messesType ? "bg-[#D9FDD3] ml-auto" : "bg-white "
      }`}
    >
      <p>
        hi Tanvir
        <sub className="text-[11px] text-gray-500 ml-3">3:25 PM</sub>
        <div className="chatTextDownArrow absolute top-[50%] translate-y-[-50%] right-0 bg-white rounded-full hidden ease-in-out duration-300">
          <ExpandMoreIcon />
        </div>
      </p>
    </div>
  );
};

export default ChatText;
