import React from "react";
import FaqHead from "./faqHead";
import FaqCard from "./FaqCard";
import StartComponent from "../StartComponent";

export default function FaqMain() {
  const styles = [
    { bg: "bg-red-500", color: "text-white" },
    { bg: "bg-white", color: "text-red-500" },
    { bg: "bg-white", color: "text-red-500" },
    { bg: "bg-red-500", color: "text-white" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex justify-start w-full">
        <FaqHead />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <FaqCard
            key={i}
            bg={styles[i % styles.length].bg}
            color={styles[i % styles.length].color}
            description={
              "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
            }
            title={"the best financial accounting app ever!"}
          />
        ))}
      </div>
      <div className="flex justify-end w-full">
        <StartComponent width={45} height={45} />
      </div>
    </div>
  );
}
