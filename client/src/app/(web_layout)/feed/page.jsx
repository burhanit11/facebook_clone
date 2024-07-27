import Header from "@/components/header/Header";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import React from "react";

const Feed = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex justify-between">
        <LeftSidebar />
        <h1>Feed</h1>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;
