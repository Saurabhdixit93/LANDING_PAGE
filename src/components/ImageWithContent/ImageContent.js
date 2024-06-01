import React from "react";

export default function ImageContent({
  isReverse,
  children,
  imagePath,
  isCenter,
}) {
  return (
    <div
      className={`w-full flex ${
        isCenter ? "items-center" : "items-start"
      } gap-4 justify-between ${isReverse ? "flex-row-reverse px-10" : ""} `}
    >
      <div className={`w-[50%] relative`}>
        <div className="w-full">
          <svg
            width="656"
            height="726"
            viewBox="0 0 656 726"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inset-0 opacity-15 z-0"
          >
            <path
              d="M465.594 259.894C519.381 313.68 552.914 377.505 563.668 437.198C574.422 496.892 562.391 552.403 525.13 589.664C487.869 626.925 432.358 638.955 372.664 628.201C312.972 617.448 249.146 583.914 195.36 530.128C141.574 476.341 108.04 412.516 97.2866 352.824C86.5325 293.129 98.5633 237.619 135.824 200.358C173.085 163.097 228.596 151.066 288.29 161.82C347.983 172.574 411.808 206.107 465.594 259.894Z"
              className="stroke-black dark:stroke-white"
            />
            <path
              d="M497.861 227.627C551.648 281.413 585.181 345.238 595.934 404.931C606.688 464.625 594.658 520.136 557.397 557.397C520.136 594.658 464.625 606.689 404.931 595.935C345.238 585.181 281.413 551.648 227.627 497.861C173.84 444.075 140.307 380.25 129.553 320.557C118.799 260.863 130.83 205.352 168.091 168.091C205.352 130.83 260.863 118.8 320.557 129.554C380.25 140.307 444.075 173.84 497.861 227.627Z"
              className="stroke-black dark:stroke-white"
            />
            <path
              d="M530.128 195.36C583.914 249.146 617.448 312.972 628.201 372.664C638.955 432.358 626.925 487.869 589.664 525.13C552.403 562.391 496.892 574.422 437.198 563.668C377.505 552.914 313.68 519.381 259.894 465.594C206.107 411.808 172.574 347.983 161.82 288.29C151.066 228.596 163.097 173.085 200.358 135.824C237.619 98.5633 293.13 86.5325 352.824 97.2866C412.516 108.04 476.341 141.574 530.128 195.36Z"
              className="stroke-black dark:stroke-white"
            />
          </svg>
          <img
            src={imagePath}
            alt={imagePath}
            className="absolute inset-0 left-[30%] top-[10%]"
            style={{ zIndex: "30" }}
          />
          <div className="absolute left-[15%] z-1 top-[10rem]">
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
      </div>

      <div className="w-[50%]">{children}</div>
    </div>
  );
}
