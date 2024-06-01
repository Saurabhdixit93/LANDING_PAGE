import React from "react";
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";
import ImageContent from "../ImageWithContent/ImageContent";

export default function HomeMain() {
  return (
    <div className="flex items-start w-full gap-2 p-4">
      <HomeLeftSide width={"w-[40%]"} />
      <HomeRightSide width={"w-[60%]"} />
    </div>
  );
}
