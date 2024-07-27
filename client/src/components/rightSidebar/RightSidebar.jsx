import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const RightSidebar = () => {
  return (
    <div className="w-[25%]  h-[100vh]">
      <h5 className="text-[#65676b] font-semibold mx-5 my-5">
        Group conversations
      </h5>
      <div className=" flex items-center text-black ">
        <IconButton size="large" sx={{ bgcolor: "#f0f2f5", p: 1, m: 1 }}>
          <AddIcon className="text-black" />
        </IconButton>
        <span className="mx-2 text-black  font-semibold">Create New Group</span>
      </div>
    </div>
  );
};

export default RightSidebar;
