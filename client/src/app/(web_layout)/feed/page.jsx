import Header from "@/components/header/Header";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import Mian from "@/components/main/Main";
import React from "react";

const Feed = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex justify-between">
        <LeftSidebar />
        <Mian />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;
