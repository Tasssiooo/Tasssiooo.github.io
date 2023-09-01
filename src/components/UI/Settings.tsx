import { IoToggle } from "react-icons/io5";
import { useThemeContext } from "../../App";

const Settings = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="tooltip-frame">
      <div className="tooltip">
        <div className="flex flex-row items-center gap-1.5 w-full bg-slate-200 dark:bg-[#333333] rounded-sm px-1.5">
          <span className="text-sm font-bold">Dark mode</span>
          <IoToggle
            aria-label="toggle dark mode"
            role="button"
            className={theme ? "toggle-on" : "toggle-off"}
            onClick={() => setTheme((prev: boolean) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
