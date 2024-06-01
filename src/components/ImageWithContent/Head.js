import React from "react";

export default function Head({ title, subTitle }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="uppercase text-lg font-medium class_font_family_light text-[#FF5555]">
        {title}
      </h1>
      <p className="capitalize text-6xl nav_font_family text-black dark:text-white">
        {subTitle}
      </p>
    </div>
  );
}
