"use client";

import HomeMain from "@/components/Home/HomeMain";
import FirsteContent from "@/components/ImageWithContent/FirsteContent";
import ImageContent from "@/components/ImageWithContent/ImageContent";
import PremiumContent from "@/components/ImageWithContent/PremiumContent";
import Navbar from "@/components/Navbar/Navbar";
import { firstContentData } from "../../dummyData";
import StartComponent from "@/components/StartComponent";
import TestinomialMain from "@/components/Testinomial/TestinomialMain";
import FaqMain from "@/components/Faqs-section/FaqMain";
import AppMain from "@/components/AppStore/AppMain";
import Footer from "@/components/Footer/Footer";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="flex min-h-screen flex-col gap-4 items-center p-4 dark:text-white dark:bg-black bg-white">
          <Navbar />
          <HomeMain />
          <div className="flex w-full justify-start mt-[-2rem]">
            <StartComponent height={45} width={45} />
          </div>

          <div className="w-full" id="features">
            <ImageContent imagePath={"/iPhone-13-Pro-Front1Image.svg"}>
              <FirsteContent title={"features"} subTitle={"Uifry Premium"}>
                {firstContentData.map((dataItem, index) => {
                  return (
                    <PremiumContent
                      key={index}
                      description={dataItem.description}
                      title={dataItem.title}
                      svgFile={dataItem.svgFile}
                    />
                  );
                })}
              </FirsteContent>
            </ImageContent>
          </div>

          <ImageContent
            isCenter={true}
            isReverse={true}
            imagePath={"/iPhone-13-Pro-Front2Image.svg"}
          >
            <FirsteContent title={"advatnages"} subTitle={"why choose Uifry?"}>
              <PremiumContent
                title={"clever notifications"}
                description={
                  "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
                }
                svgFile={
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24.488" r="24" fill="#FF5555" />
                    <path
                      d="M26 33.488H22M30 20.488C30 18.8967 29.3679 17.3706 28.2427 16.2454C27.1174 15.1202 25.5913 14.488 24 14.488C22.4087 14.488 20.8826 15.1202 19.7574 16.2454C18.6322 17.3706 18 18.8967 18 20.488C18 23.5782 17.2205 25.694 16.3497 27.0934C15.6151 28.2739 15.2479 28.8641 15.2613 29.0288C15.2763 29.2111 15.3149 29.2806 15.4618 29.3896C15.5945 29.488 16.1926 29.488 17.3889 29.488H30.6112C31.8074 29.488 32.4056 29.488 32.5382 29.3896C32.6852 29.2806 32.7238 29.2111 32.7387 29.0288C32.7522 28.8641 32.3849 28.2739 31.6504 27.0935C30.7795 25.694 30 23.5782 30 20.488Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </FirsteContent>
          </ImageContent>
          <div className="flex w-full justify-center mt-[-2rem]">
            <StartComponent height={45} width={45} />
          </div>
          <ImageContent
            isCenter={true}
            imagePath={"/iPhone-13-Pro-FrontImage.svg"}
          >
            <FirsteContent title={"advatnages"} subTitle={"why choose Uifry?"}>
              <PremiumContent
                title={"fully customizable"}
                description={
                  "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
                }
                svgFile={
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24.9761" r="24" fill="#FF5555" />
                    <path
                      d="M24 14.9761L22.6985 20.1821C22.4445 21.1979 22.3176 21.7059 22.0531 22.1192C21.8192 22.4848 21.5087 22.7952 21.1431 23.0292C20.7298 23.2936 20.2218 23.4206 19.206 23.6746L14 24.9761L19.206 26.2776C20.2218 26.5315 20.7298 26.6585 21.1431 26.923C21.5087 27.1569 21.8192 27.4674 22.0531 27.833C22.3176 28.2463 22.4445 28.7542 22.6985 29.7701L24 34.9761L25.3015 29.7701C25.5555 28.7542 25.6824 28.2463 25.9469 27.833C26.1808 27.4674 26.4913 27.1569 26.8569 26.923C27.2702 26.6585 27.7782 26.5315 28.794 26.2776L34 24.9761L28.794 23.6746C27.7782 23.4206 27.2702 23.2936 26.8569 23.0292C26.4913 22.7952 26.1808 22.4848 25.9469 22.1192C25.6824 21.7059 25.5555 21.1979 25.3015 20.1821L24 14.9761Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </FirsteContent>
          </ImageContent>
          <div className="flex w-full justify-end mt-[-2rem]">
            <StartComponent height={45} width={45} />
          </div>

          <div id="about">
            <TestinomialMain />
          </div>

          <div id="pricing" className="w-full px-16 mt-4 ">
            <FaqMain />
          </div>

          <div id="contact" className="w-full mt-2">
            <AppMain />
          </div>

          <div id="footer" className="w-full mt-2">
            <Footer />
          </div>

          <div className="flex justify-center w-full">
            <p className="text-md text-start text-gray-900 dark:text-white font-bold class_font_family_light text-center">
              Copyright 2022 uifry.com all rights reserved
            </p>
          </div>
        </main>
      )}
    </React.Fragment>
  );
}
