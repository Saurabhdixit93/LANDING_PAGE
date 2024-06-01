import React from "react";
import Head from "./Head";

export default function FirsteContent({ title, subTitle, children }) {
  return (
    <div className="flex flex-col gap-6 mt-20">
      <Head subTitle={subTitle} title={title} />
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
