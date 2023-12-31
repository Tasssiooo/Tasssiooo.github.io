import Introduction from "./sections/Introduction";
import { IoMenuOutline } from "react-icons/io5";
import Properties from "./sections/Properties";

type States = {
  state: {
    showNavbar: (n: any) => void;
    setModal: (m: any) => void;
  };
};

const DocFrame = ({ state }: States) => {
  return (
    <>
      <nav className="flex flex-row fixed top-0 w-screen p-3 z-[100] bg-[--background-color] dark:bg-[#111111] border-b border-gray-300">
        <IoMenuOutline
          role="button"
          aria-label="open properties list"
          className="text-4xl md:hidden select-none dark:text-[#DCDCDC]"
          onClick={() => state.showNavbar((prev: boolean) => !prev)}
        />
        <h1 className="md:w-screen w-10/12 text-center text-3xl font-bold select-none">
          Troybin Dictionary
        </h1>
      </nav>
      <main
        className="absolute inset-0 max-w-5xl min-h-screen max-h-max bg-[--background-color] dark:bg-[#111111] dark:text-[#DCDCDC] md:left-[max(19rem,calc(50%-25rem))] top-8 py-10"
        onClick={() => {
          state.showNavbar(false);
          state.setModal(false);
        }}
      >
        <Introduction />
        <hr className="w-10/12 mt-5 m-auto border-[--hover-color]" />
        <Properties />
      </main>
    </>
  );
};

export default DocFrame;
