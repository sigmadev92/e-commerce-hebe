import React from "react";
import UpperMenu from "./UpperMenu";
import { Link } from "react-router-dom";

export default function Brand() {
  return (
    <div className="bg-yellow-300 md:flex justify-around ">
      <h1 className="font-bold text-[45px] text-center cursor-pointer">
        <Link to="/">hebe.com</Link>
      </h1>
      <UpperMenu />
    </div>
  );
}
