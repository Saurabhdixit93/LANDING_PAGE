import React from "react";

export default function PremiumContent({ title, description, svgFile }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2">
        {svgFile}

        <p className="class_font_family_light font-[500] text-3xl dark:text-white">
          {title}
        </p>
      </div>

      <p className="class_font_family_light text-lg opacity-80 dark:text-white ">
        {description}
      </p>
    </div>
  );
}
