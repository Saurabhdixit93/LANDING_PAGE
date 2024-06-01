import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen">
      <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-violet-400" />
      <div className="absolute w-20 h-20 top-[48%] left-[49%] ">
        <Image src={"/Frame.svg"} alt="logo" width={30} height={30} />
      </div>
    </div>
  );
}
