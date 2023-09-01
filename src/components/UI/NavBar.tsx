import {
  IoSearchOutline,
  IoSettings,
  IoInformationCircle,
} from "react-icons/io5";

import { useState, useEffect } from "react";
import Settings from "./Settings";

const NavBar = () => {
  const API_URL = "http://localhost:3500/list";
  const [tooltip, setTooltip] = useState("");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchProps = async () => {
      try {
        const response = await fetch(API_URL);
        const listProps = await response.json();
        setList(listProps.sort());
      } catch (error) {
        console.log(error);
      }
    };
    fetchProps();
  }, []);

  return (
    <nav className="md:flex hidden flex-col justify-between fixed inset-0 top-12 left-[max(0px,calc(50%-45rem))] w-72 h-screen z-[200] px-3 pt-7 bg-[--background-color]">
      <div className="h-[90%]">
        <div className="flex flex-row justify-center gap-1 items-center bg-white dark:bg-[#333333] w-full border border-[#e4e3e3] dark:border-[#666666] border-b-2 border-b-gray-500 dark:border-b-[#111111] drop-shadow-dark rounded-md py-1">
          <span role="img">
            <IoSearchOutline className="text-2xl" />
          </span>
          <input
            className="w-10/12 px-1 focus:outline-none text-base bg-transparent placeholder:text-[#5B5B5B] dark:placeholder:text-[#e1e1e1e9]"
            aria-label="Search"
            aria-placeholder="Look for definitions here"
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Look for definitions here"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className="h-[80%] mt-5">
          <span className="font-bold">Troybin properties</span>
          <hr className="border-gray-500 mt-1" />
          <ul className="flex flex-col items-start h-[93%] overflow-y-auto overflow-x-hidden">
            <li className="introduction">
              <a href="#introduction">Introduction</a>
            </li>
            {list
              .filter((p: string) => p.toLowerCase().includes(search))
              .map((prop: string) => (
                <li>
                  <a href={`#${prop}`}>{prop}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex flex-row justify-center gap-10 border-t border-t-gray-500 py-3">
          <IoInformationCircle
            aria-label="about"
            role="button"
            className="button text-[2.1rem]"
          />
          <div
            onMouseOver={() => setTooltip("settings")}
            onMouseOut={() => setTooltip("")}
          >
            {tooltip === "settings" && <Settings />}
            <IoSettings
              aria-label="settings"
              role="button"
              className="button text-3xl hover:animate-settings"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
