import React from "react";

export default function FaqHead() {
  return (
    <div className="flex justify-start flex-col gap-2 w-[50%]">
      <h2 className="uppercase text-xl font-bold nav_font_family text-[#FF5555]">
        faq
      </h2>
      <p className="capitalize text-6xl nav_font_family text-black dark:text-white">
        Frequently asked questions
      </p>
    </div>
  );
}
