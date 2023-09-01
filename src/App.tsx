import { useState, useContext, createContext } from "react";
import NavBar from "./components/UI/NavBar";
import MobileNavBar from "./components/UI/MobileNavBar";
import DocFrame from "./components/DocFrame";

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

  return (
    <div className={theme ? "dark" : "light"}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <NavBar />
        <MobileNavBar state={{navbar, showNavbar}} mouse={{isOver, setIsOver}} />
        <DocFrame state={{navbar, showNavbar}} mouse={isOver} />
      </ThemeContext.Provider>
    </div>
  );
}
