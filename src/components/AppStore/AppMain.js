import React from "react";
import StartComponent from "../StartComponent";
import Image from "next/image";

export default function AppMain() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative left-0">
        <StartComponent width={40} height={40} />
      </div>

      <div className="relative left-[-10rem] h-[5rem] z-0 top-[-7rem]">
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

      <div className="relative w-full px-16 py-4 bg-black dark:bg-white flex items-center justify-center gap-6 rounded-md">
        <div className="flex flex-col gap-4 w-[50%]">
          <h2 className="text-5xl text-white nav_font_family font-bold capitalize dark:text-black">
            ready to get started?
          </h2>
          <p className="text-start text-xl text-white class_font_family_light dark:text-black">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>

          <button className="rounded-md text-black w-[12rem] flex items-center gap-2 z-10 relative bg-white dark:bg-black dark:text-white dark:border-white border px-4 py-2 rounded font-bold capitalize  nav_font_family">
            download app
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z"
                className="fill-black dark:fill-white"
              />
            </svg>
          </button>

          <div className="flex w-full justify-end">
            <StartComponent isColor={true} width={40} height={40} />
          </div>
        </div>

        <div className="w-[50%] flex justify-end relative z-20">
          <div className="flex w-full justify-end">
            <StartComponent isColor={true} width={40} height={40} />
          </div>
          <Image src={"/iPhone 13 Pro.svg"} width={400} height={400} />
        </div>
        <div className="absolute left-0 bottom-0 z-0">
          <svg
            width="392"
            height="317"
            viewBox="0 0 392 317"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M133.741 258.456C187.082 311.797 220.337 375.094 231.002 434.292C241.667 493.492 229.736 548.542 192.784 585.493C155.833 622.445 100.783 634.376 41.5826 623.711C-17.6151 613.046 -80.9116 579.791 -134.253 526.45C-187.594 473.109 -220.849 409.812 -231.514 350.614C-242.179 291.414 -230.248 236.364 -193.296 199.413C-156.345 162.461 -101.295 150.53 -42.0947 161.195C17.1031 171.86 80.3996 205.115 133.741 258.456Z"
              className="stroke-white dark:stroke-black"
            />
            <path
              d="M165.741 226.456C219.082 279.797 252.337 343.094 263.002 402.292C273.667 461.492 261.736 516.542 224.784 553.493C187.833 590.445 132.783 602.376 73.5826 591.711C14.3849 581.046 -48.9116 547.791 -102.253 494.45C-155.594 441.109 -188.849 377.812 -199.514 318.614C-210.179 259.414 -198.248 204.364 -161.296 167.413C-124.345 130.461 -69.2946 118.53 -10.0947 129.195C49.1031 139.86 112.4 173.115 165.741 226.456Z"
              className="stroke-white dark:stroke-black"
            />
            <path
              d="M197.741 194.456C251.082 247.797 284.337 311.094 295.002 370.292C305.667 429.492 293.736 484.542 256.784 521.493C219.833 558.445 164.783 570.376 105.583 559.711C46.3849 549.046 -16.9116 515.791 -70.2527 462.45C-123.594 409.109 -156.849 345.812 -167.514 286.614C-178.179 227.414 -166.248 172.364 -129.296 135.413C-92.3446 98.4614 -37.2946 86.5302 21.9053 97.1952C81.1031 107.86 144.4 141.115 197.741 194.456Z"
              className="stroke-white dark:stroke-black"
            />
          </svg>
        </div>
        <div className="absolute right-0 top-0 z-0">
          <svg
            width="360"
            height="473"
            viewBox="0 0 360 473"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M461.741 10.4564C515.082 63.7975 548.337 127.094 559.002 186.292C569.667 245.492 557.736 300.542 520.784 337.493C483.833 374.445 428.783 386.376 369.583 375.711C310.385 365.046 247.088 331.791 193.747 278.45C140.406 225.109 107.151 161.812 96.4861 102.614C85.8211 43.4145 97.7523 -11.6355 134.704 -48.5871C171.655 -85.5386 226.705 -97.4698 285.905 -86.8048C345.103 -76.1403 408.4 -42.8848 461.741 10.4564Z"
              className="stroke-white dark:stroke-black"
            />
            <path
              d="M493.741 -21.5436C547.082 31.7975 580.337 95.094 591.002 154.292C601.667 213.492 589.736 268.542 552.784 305.493C515.833 342.445 460.783 354.376 401.583 343.711C342.385 333.046 279.088 299.791 225.747 246.45C172.406 193.109 139.151 129.812 128.486 70.6144C117.821 11.4145 129.752 -43.6355 166.704 -80.5871C203.655 -117.539 258.705 -129.47 317.905 -118.805C377.103 -108.14 440.4 -74.8848 493.741 -21.5436Z"
              className="stroke-white dark:stroke-black"
            />
            <path
              d="M525.741 -53.5436C579.082 -0.202534 612.337 63.094 623.002 122.292C633.667 181.492 621.736 236.542 584.784 273.493C547.833 310.445 492.783 322.376 433.583 311.711C374.385 301.046 311.088 267.791 257.747 214.45C204.406 161.109 171.151 97.8122 160.486 38.6144C149.821 -20.5855 161.752 -75.6355 198.704 -112.587C235.655 -149.539 290.705 -161.47 349.905 -150.805C409.103 -140.14 472.4 -106.885 525.741 -53.5436Z"
              className="stroke-white dark:stroke-black"
            />
          </svg>
        </div>

        <div className="absolute right-[0%] z-0 top-[3rem]">
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
  );
}
