import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightSidebar/RightSidebar";
import React from "react";

const Feed = () => {
  return (
    <div className="flex justify-between">
      <LeftSidebar />
      <h1>Feed</h1>
      <RightSidebar />
    </div>
  );
};

export default Feed;
