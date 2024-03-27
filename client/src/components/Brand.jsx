import React from "react";
import UpperMenu from "./UpperMenu";

export default function Brand() {
  return (
    <div className="bg-yellow-300 md:flex justify-around ">
      <h1 className="font-bold text-[45px] text-center ">hebe.com</h1>
      <UpperMenu />
    </div>
  );
}
