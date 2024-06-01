import React from "react";
import StartComponent from "../StartComponent";
import Image from "next/image";

export default function HomeLeftSide({ width }) {
  return (
    <div className={`flex flex-col gap-4 ${width}`}>
      <div className="flex w-full justify-start">
        <StartComponent height={40} width={40} />
      </div>

      {/* STARTED  */}
      <div className="w-full flex-col flex gap-2 px-8">
        <div className="relative">
          <h2 className="bg-transparent nav_font_family text-6xl leading-60 font-bold text-black dark:text-white capitalize relative z-10">
            make the best financial decisions
          </h2>
          <div className="absolute left-[15%] z-0 top-[-7rem]">
            <svg
              width="535"
              height="445"
              viewBox="0 0 535 445"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_101_80)">
                <ellipse
                  cx="253.574"
                  cy="262.051"
                  rx="149.574"
                  ry="78.9132"
                  fill="#FDE598"
                />
              </g>
              <g filter="url(#filter1_f_101_80)">
                <ellipse
                  cx="284.52"
                  cy="182.622"
                  rx="146.479"
                  ry="78.9132"
                  fill="#FF5555"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_101_80"
                  x="0.845436"
                  y="79.9831"
                  width="505.457"
                  height="364.136"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="51.5773"
                    result="effect1_foregroundBlur_101_80"
                  />
                </filter>
                <filter
                  id="filter1_f_101_80"
                  x="34.8862"
                  y="0.554176"
                  width="499.268"
                  height="364.136"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="51.5773"
                    result="effect1_foregroundBlur_101_80"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div>
          <p className="text-black font-[500] dark:text-white nav_font_family_light text-md">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <button className="class_font_family_light leading-5 flex items-center justify-center gap-2 h-[3.5rem] w-[11rem] rounded-md bg-black dark:bg-white dark:border border-black dark:text-black text-white">
            Get Started
            <svg
              width="25"
              height="8"
              viewBox="0 0 25 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                className="fill-white dark:fill-black"
              />
            </svg>
          </button>

          <button className="class_font_family_light flex items-center justify-center gap-2 font-lg">
            <div className="bg-transparent border border-black rounded-full p-2 dark:border-white">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.0809V1.91907C1 1.52282 1.43894 1.28402 1.77163 1.49929L8.85124 6.08021C9.15574 6.27724 9.15574 6.72276 8.85124 6.91978L1.77163 11.5007C1.43894 11.716 1 11.4772 1 11.0809Z"
                  className="fill-black dark:fill-white stroke-black dark:stroke-white"
                />
              </svg>
            </div>
            Watch Video
          </button>
        </div>

        <div className="flex justify-start  w-full mt-10 relative">
          <div className="absolute left-[15%] top-[10%]">
            <StartComponent height={40} width={40} />
          </div>
          <Image
            src="/Group 35924.svg"
            width={500}
            height={500}
            alt="Group 35924.svg"
          />
        </div>
      </div>
    </div>
  );
}
