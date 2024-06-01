import Image from "next/image";
import React from "react";

export default function Footer() {
  const LINKS = [
    {
      title: "Home",
    },
    {
      title: "about us",
    },
    {
      title: "bookings",
    },
    {
      title: "blog",
    },
  ];

  const LEGALS = [
    { title: "terms of use" },
    {
      title: "Privacy Policy",
    },
    {
      title: "cookie policy",
    },
  ];

  const PRODUCTS = [
    {
      title: "take tour",
    },
    {
      title: "live chat",
    },
    {
      title: "reveiws",
    },
  ];
  return (
    <div className="flex items-start gap-4 justify-between w-full mt-8 border-b-2 pb-8">
      <div className="flex flex-col gap-4 justify-start items-start">
        <div className="text-2xl font-bold text-gray-900 dark:text-white flex space-x-2 items-center">
          <Image src={"/Frame.svg"} alt="logo" width={50} height={50} />
          <h2 className="text-md">uifry</h2>
        </div>
        <div className="flex items-center gap-4">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9394 0.708984C16.2804 0.708984 17.5704 1.23898 18.5194 2.18998C19.4694 3.13898 20.0004 4.41898 20.0004 5.75898V13.659C20.0004 16.449 17.7304 18.709 14.9394 18.709H5.06043C2.26943 18.709 0.000427246 16.449 0.000427246 13.659V5.75898C0.000427246 2.96898 2.25943 0.708984 5.06043 0.708984H14.9394ZM16.0704 5.90898C15.8604 5.89798 15.6604 5.96898 15.5094 6.10898L11.0004 9.70898C10.4204 10.19 9.58943 10.19 9.00043 9.70898L4.50043 6.10898C4.18943 5.87898 3.75943 5.90898 3.50043 6.17898C3.23043 6.44898 3.20043 6.87898 3.42943 7.17898L3.56043 7.30898L8.11043 10.859C8.67043 11.299 9.34943 11.539 10.0604 11.539C10.7694 11.539 11.4604 11.299 12.0194 10.859L16.5304 7.24898L16.6104 7.16898C16.8494 6.87898 16.8494 6.45898 16.5994 6.16898C16.4604 6.01998 16.2694 5.92898 16.0704 5.90898Z"
              className="fill-[#FF5555] dark:fill-white"
            />
          </svg>

          <h2 className="text-md text-gray-900 dark:text-white font-bold class_font_family_light">
            help@frybix.com
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.53174 10.1814C13.5208 14.1693 14.4258 9.5557 16.9656 12.0938C19.4143 14.5417 20.8216 15.0322 17.7192 18.1337C17.3306 18.446 14.8616 22.2032 6.1846 13.5287C-2.49348 4.85298 1.26158 2.38143 1.57397 1.99293C4.68387 -1.11717 5.16586 0.298367 7.61449 2.74631C10.1544 5.28548 5.54266 6.1934 9.53174 10.1814Z"
              className="fill-[#FF5555] dark:fill-white"
            />
          </svg>

          <h2 className="text-md text-gray-900 dark:text-white font-bold class_font_family_light">
            0 800 123 456
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="nav_font_family text-3xl leading-60 font-bold text-black dark:text-white capitalize">
          links
        </h2>
        <div className="flex flex-col gap-2">
          {LINKS.map((Item, index) => (
            <p
              key={index}
              className="text-md text-start text-gray-900 dark:text-white font-bold class_font_family_light"
            >
              {Item.title}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="nav_font_family text-3xl leading-60 font-bold text-black dark:text-white capitalize">
          legal
        </h2>
        <div className="flex flex-col gap-2">
          {LEGALS.map((Item, index) => (
            <p
              key={index}
              className="capitalize text-md text-start text-gray-900 dark:text-white font-bold class_font_family_light"
            >
              {Item.title}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="nav_font_family text-3xl leading-60 font-bold text-black dark:text-white capitalize">
          product
        </h2>
        <div className="flex flex-col gap-2">
          {PRODUCTS.map((Item, index) => (
            <p
              key={index}
              className="capitalize text-md text-start text-gray-900 dark:text-white font-bold class_font_family_light"
            >
              {Item.title}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="nav_font_family text-3xl leading-60 font-bold text-black dark:text-white capitalize">
          Newsletter
        </h2>
        <p className="capitalize text-md text-start text-gray-900 dark:text-white font-bold class_font_family_light">
          Stay up to date
        </p>

        <div className="flex border border-gray-900 dark:border-white items-center p-4">
          <input
            placeholder="Enter your email"
            className="outline-none focus:outline-none active:outline-none shadow-none text-md px-4 py-2"
          />
          <button className="bg-black dark:bg-white text-white dark:text-black dark:border-white text-md px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
