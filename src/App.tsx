import { useState } from "react";
import NavBar from "./components/UI/NavBar";
import MobileNavBar from "./components/UI/MobileNavBar";
import DocFrame from "./components/DocFrame";
import About from "./components/UI/About";

export default function App() {
  const [theme, setTheme] = useState(true);
  const [navbar, showNavbar] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <NavBar state={{ setModal, theme, setTheme }} />
      <MobileNavBar
        state={{ navbar, showNavbar, theme, setTheme, setModal }}
      />
      <DocFrame state={{ showNavbar, setModal }} />
      <About display={{ modal, setModal }} />
    </>
  );
}
