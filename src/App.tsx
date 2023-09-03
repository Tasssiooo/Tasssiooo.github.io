import { useState, useContext, createContext } from "react";
import NavBar from "./components/UI/NavBar";
import MobileNavBar from "./components/UI/MobileNavBar";
import DocFrame from "./components/DocFrame";
import About from "./components/UI/About";

type ThemeContext = {
  theme: boolean;
  setTheme: (t: any) => void;
};

const ThemeContext = createContext<ThemeContext>({
  theme: false,
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = useState(false);
  const [navbar, showNavbar] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className={theme ? "dark" : "light"}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <NavBar state={setModal} />
        <MobileNavBar
          state={{ navbar, showNavbar }}
          mouse={{ isOver, setIsOver }}
        />
        <DocFrame state={{ navbar, showNavbar }} mouse={isOver} />
        <About display={{ modal, setModal }} />
      </ThemeContext.Provider>
    </div>
  );
}
