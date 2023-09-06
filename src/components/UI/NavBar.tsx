import {
  IoSearchOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoInformationCircle,
  IoCloseOutline,
  IoLogoGithub,
  IoBugOutline,
} from "react-icons/io5";

import { useState } from "react";
import list from "../../../data/db.ts";
import Tooltip from "./Tooltip.tsx";

type State = {
  state: {
    setModal: (m: any) => void;
    theme: boolean;
    setTheme: (t: any) => void;
  };
};

const NavBar = ({ state }: State) => {
  const [search, setSearch] = useState("");

  const changeTheme = () => {
    const body: any = document.querySelector("body");
    if (state.theme) {
      body.className = "dark";
      body.style.backgroundColor = "#111111";
    } else {
      body.className = "light";
      body.style.backgroundColor = "#ededed";
    }
  };

  return (
    <nav className="md:block hidden fixed inset-0 top-[3.8rem] left-[max(0px,calc(50%-45rem))] w-72 h-screen z-[200] px-3 pt-4 bg-[--background-color] dark:bg-[#111111] text-[#373737]">
      <div className="h-[93%]">
        <div className="input-search">
          <span role="img">
            <IoSearchOutline className="text-xl" />
          </span>
          <input
            aria-label="Search"
            aria-placeholder="Look for definitions here"
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            value={search}
            placeholder="Look for definitions here"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <IoCloseOutline
            role="button"
            className="text-2xl cursor-pointer"
            style={{ display: search ? "block" : "none" }}
            onClick={() => setSearch("")}
          />
        </div>
        <div className="h-[80%] mt-2">
          <span className="font-bold dark:text-[#DCDCDC] text-sm">
            Troybin properties ({list.length})
          </span>
          <hr className="border-gray-500 dark:border-gray-400 my-1" />
          <ul className="flex flex-col items-start h-[93%] overflow-y-auto overflow-x-hidden dark:text-[#DCDCDC]">
            <li key={"intro"} className="introduction">
              <a href="#introduction">Introduction</a>
            </li>
            {list
              .filter((p: string) => p.toLowerCase().includes(search))
              .sort()
              .map((prop: string, i) => (
                <li key={i}>
                  <a href={`#${prop}`}>{prop}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="fixed bottom-0 flex flex-row gap-0.5 h-max border-t border-t-[#A4A4A4] bg-[#EDEDED] dark:bg-[#333333]">
          <button className="button" aria-label="About">
            <Tooltip text={"About"} left={"-6px"} />
            <IoInformationCircle
              role="img"
              className="dark:text-[#DCDCDC]"
              onClick={() => state.setModal((prev: boolean) => !prev)}
            />
          </button>
          <button
            className="button"
            aria-label="Change theme"
            onClick={() => {
              state.setTheme((prev: boolean) => !prev);
              changeTheme();
            }}
          >
            <Tooltip
              text={!state.theme ? "Light theme" : "Dark theme"}
              left={"-31px"}
            />
            {!state.theme ? (
              <IoSunnyOutline role="img" className="dark:text-[#DCDCDC]" />
            ) : (
              <IoMoonOutline
                role="img"
                className="dark:text-[#DCDCDC] text-[22px]"
              />
            )}
          </button>
          <a
            href="https://github.com/Tasssiooo/Tasssiooo.github.io"
            target="_blank"
            rel="noreferrer"
            role="button"
            className="button"
            aria-label="Github repository"
          >
            <Tooltip text={"Repository"} left={"-28px"} />
            <IoLogoGithub role="img" className="dark:text-[#DCDCDC]" />
          </a>
          <div className="font-semibold text-center p-2.5 text-sm select-none dark:text-[#EDEDED]">
            V0.0.2
          </div>
          <a
            href="https://github.com/Tasssiooo/Tasssiooo.github.io/issues"
            target="_blank"
            rel="noreferrer"
            role="button"
            className="button"
            aria-label="Report issues"
          >
            <Tooltip text={"Report issues"} left={"-37px"} />
            <IoBugOutline role="img" className="dark:text-[#DCDCDC]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
