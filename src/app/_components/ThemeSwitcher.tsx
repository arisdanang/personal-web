import { useTheme } from "next-themes";
import React from "react";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    console.log("theme", theme);
    if (currentTheme === "dark") {
      return (
        <IoSunnyOutline
          className="w-6 h-6 text-white"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <IoMoon
          className="w-6 h-6 text-gray-500"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div
      className="border p-2 rounded-md border-gray-500 cursor-pointer"
      // onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      {renderThemeChanger()}
    </div>
  );
};

export default ThemeSwitcher;
