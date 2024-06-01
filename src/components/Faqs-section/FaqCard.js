import React from "react";

export default function FaqCard({ title, description, bg, color }) {
  return (
    <div
      className={`${bg} p-6 rounded-lg h-[250px] flex flex-col justify-center gap-4 items-center`}
    >
      <h1
        className={`${color} capitalize dark:${color} text-3xl font-bold nav_font_family`}
      >
        {title}
      </h1>
      <p
        className={`${color} capitalize dark:${color} text-xl font-bold class_font_family_light `}
      >
        {description}
      </p>
    </div>
  );
}
