import reactIcons_logo from "../UI/assets/react-icons-logo.svg";
import react_logo from "../UI/assets/react-logo512.png";
import tailwindcss_logo from "../UI/assets/tailwindcss-mark.svg";
import vite_logo from "../UI/assets/logo-with-shadow.png";

type State = {
  display: {
    modal: boolean;
    setModal: (m: any) => void;
  };
};

const About = ({ display }: State) => {
  return (
    <div className="modal" style={{ display: display.modal ? "flex" : "none" }}>
      <h1 className="text-xl text-center">
        This dictionary was made using typescript with:
      </h1>
      <div className="h-3/5">
        <div className="flex flex-row justify-evenly items-center mt-5">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            className="w-[14%]"
          >
            <img
              src={react_logo}
              className="logo drop-shadow-logo hover:drop-shadow-react"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="w-[14%]"
          >
            <img
              src={tailwindcss_logo}
              className="logo drop-shadow-logo hover:drop-shadow-tailwind"
            />
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noreferrer"
            className="w-[14%]"
          >
            <img src={vite_logo} className="logo hover:drop-shadow-vite" />
          </a>
        </div>
        <div className="flex px-5 flex-row justify-evenly items-center mt-2">
          <span className="src">React</span>
          <span className="src">Tailwindcss</span>
          <span className="src">Vite</span>
        </div>
        <div className="flex flex-col justify-center items-center p-3">
          <a
            href="https://www.npmjs.com/package/react-icons"
            target="_blank"
            rel="noreferrer"
            className="w-[14%]"
          >
            <img src={reactIcons_logo} className="logo" />
          </a>
          <span className="src">Icons by React-Icons</span>
        </div>
      </div>
    </div>
  );
};

export default About;
