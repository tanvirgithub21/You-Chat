import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ img }) => {
  return (
    <div className="overflow-hidden">
      {/* avatar  */}
      {img ? (
        <img
          src={img}
          alt="Avatar"
          className="rounded-full w-full h-full object-cover"
        />
      ) : (
        <FaUserCircle className="w-full h-full" />
      )}
    </div>
  );
};

export default Avatar;
