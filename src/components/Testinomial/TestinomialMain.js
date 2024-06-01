import Image from "next/image";
import React from "react";
import StartComponent from "../StartComponent";

export default function TestinomialMain() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full justify-center align-center">
        <h2 className="uppercase text-xl font-medium nav_font_family dark:text-white text-center ">
          testimonial
        </h2>
        <div className="flex items-center justify-center flex-col gap-1">
          <p className="text-5xl nav_font_family text-black dark:text-white capitalize text-center">
            what our users
          </p>
          <p className="text-5xl nav_font_family text-black dark:text-white capitalize text-center">
            say about us?
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full">
        <div className="relative w-full flex justify-center align-center">
          <div className="absolute left-0 z-0 opacity-50 top-[1rem]">
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
          <Image
            src={"/testinomial-left.svg"}
            alt="testinomial-left"
            width={500}
            height={500}
            className="z-10"
          />
        </div>

        <div className="flex flex-col gap-4 w-[80%]">
          <h2 className="capitalize text-3xl font-medium nav_font_family dark:text-white text-start">
            the best financial accounting app ever!
          </h2>
          <p className="class_font_family_light text-lg opacity-80 dark:text-white text-start">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>

          <div className="flex flex-col gap-2 ">
            <Image
              width={100}
              height={100}
              src={"/Group 35917.svg"}
              alt="Group 35917.svg"
            />
            <h2 className="capitalize text-xl font-medium nav_font_family dark:text-white">
              nick jonas
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-start">
        <StartComponent height={50} width={50} />
      </div>
    </div>
  );
}
