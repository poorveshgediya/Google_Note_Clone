import React from "react";
import { Notes, ThreeLineHorizontal } from "../../assets/Icons";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex items-center gap-20 w-full min-h-16 border-b-2 border-amber-300">
      <div className="flex items-center justify-center gap-2 px-5">
        <ThreeLineHorizontal className={"hover:rotate-180 duration-200"} />
        <Notes />
        <p>Keep</p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
