import { useState } from "react";
import Menu from "./Menu";
export default function DownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu && <Menu />}

      <div
        className="text-center font-bold border-2 fixed bottom-2 cursor-pointer w-full md:hidden"
        onClick={() => {
          setShowMenu((prev) => !prev);
          console.log(window.innerWidth);
        }}
      >
        {showMenu ? "X" : "MENU"}
      </div>
    </>
  );
}
