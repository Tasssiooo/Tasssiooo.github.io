import {
  IoSearchOutline,
  IoSettings,
  IoInformationCircle,
} from "react-icons/io5";

import { useState, useEffect } from "react";
import Settings from "./Settings";

type States = {
  state: {
    navbar: boolean;
    showNavbar: (n: any) => void;
  };
  mouse: {
    isOver: boolean;
    setIsOver: (m: any) => void;
  };
};

const MobileNavBar = ({ state, mouse }: States) => {
  const API_URL = "http://localhost:3500/list";
  const [tooltip, setTooltip] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const response = await fetch(API_URL);
        const listProps = await response.json();
        setList(listProps);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProps();
  }, []);

  return (
    <nav
      className="flex flex-col justify-between fixed inset-0 top-[3.8rem] left-[max(0px,calc(50%-45rem))] w-72 h-screen z-[200] px-2 pt-7 bg-[--background-color]"
      style={{ display: state.navbar ? "flex" : "none" }}
      id={state.navbar ? "start" : ""}
      onMouseEnter={() => mouse.setIsOver(true)}
      onMouseLeave={() => mouse.setIsOver(false)}
    >
      <div className="h-[88%]">
        <div className="flex flex-row justify-center gap-1 items-center bg-white w-full border border-[#e4e3e3] border-b-2 border-b-gray-500 rounded-md py-1">
          <span role="img">
            <IoSearchOutline className="text-2xl" />
          </span>
          <input
            className="w-10/12 px-1 focus:outline-none text-base bg-transparent placeholder:text-[#5B5B5B]"
            aria-label="Search"
            aria-placeholder="Look for definitions here"
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Look for definitions here"
          />
        </div>
        <div className="h-[80%] mt-5">
          <span className="font-bold">Troybin properties</span>
          <hr className="border-gray-500 mt-1" />
          <ul className="flex flex-col items-start h-[92%] overflow-y-auto overflow-x-hidden">
            <li className="introduction">
              <a href="#introduction">Introduction</a>
            </li>
            {list.map((prop) => (
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

export default MobileNavBar;
