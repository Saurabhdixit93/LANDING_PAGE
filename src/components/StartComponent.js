import React from "react";

export default function StartComponent({ width, height, isColor }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.9117 4.97056L25.8375 21.6408L45.3253 32.8369L24.8128 23.6519L20.1867 45.6456L22.5835 23.2988L0.236642 25.6956L22.2304 21.0695L13.0454 0.556969L24.2415 20.0448L40.9117 4.97056Z"
        className={`${
          isColor ? "fill-white dark:fill-black" : "fill-black dark:fill-white"
        }`}
      />
    </svg>
  );
}
