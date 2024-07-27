"use client";
import { IconButton } from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const LeftSidebar = () => {
  return (
    <div className="w-[25%]  h-[100vh]">
      <h5 className="text-[#65676b] font-semibold mx-5 my-5">
        Group conversations
      </h5>
      <div className=" flex items-center text-black ">
        <IconButton
          size="large"
          color="primary"
          sx={{ bgcolor: "#f0f2f5", p: 1, m: 1 }}
        >
          <GroupIcon />
        </IconButton>
        <span className="mx-2 text-black  font-semibold">Find Frinds</span>
      </div>
      <div className=" flex items-center text-black ">
        <IconButton
          size="large"
          color="primary"
          sx={{ bgcolor: "#f0f2f5", p: 1, m: 1 }}
        >
          <ChatIcon />
        </IconButton>
        <span className="mx-2 text-black  font-semibold">Feeds</span>
      </div>
      <div className=" flex items-center text-black ">
        <IconButton
          size="large"
          color="primary"
          sx={{ bgcolor: "#f0f2f5", p: 1, m: 1 }}
        >
          <FacebookOutlinedIcon />
        </IconButton>
        <span className="mx-2 text-black  font-semibold">Welcome</span>
      </div>
      <div className=" flex items-center text-black ">
        <IconButton
          size="large"
          color="primary"
          sx={{ bgcolor: "#f0f2f5", p: 1, m: 1 }}
        >
          <StoreOutlinedIcon />
        </IconButton>
        <span className="mx-2 text-black  font-semibold">Videos</span>
      </div>
      <div className=" flex items-center text-black ">
        <IconButton
          size="large"
          color="primary"
          sx={{ bgcolor: "#f0f2f5", p: 1, m: 1 }}
        >
          <OndemandVideoOutlinedIcon />
        </IconButton>
        <span className="mx-2 text-black  font-semibold">Save</span>
      </div>
      <div className=" flex items-center text-black ">
        <IconButton
          size="large"
          color="primary"
          sx={{ bgcolor: "#f0f2f5", p: 1, m: 1 }}
        >
          <BookmarkBorderOutlinedIcon />
        </IconButton>
        <span className="mx-2 text-black  font-semibold">Marketplace</span>
      </div>
    </div>
  );
};

export default LeftSidebar;
