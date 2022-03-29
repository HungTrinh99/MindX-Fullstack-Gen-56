import React, { useContext } from "react";
import ThemeContext from "../../context/theme";
import LangCtx from "../../context/language";

const Sidebar = (props) => {
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext;

  const langCtx = useContext(LangCtx);

  return (
    <div
      style={
        theme === "light"
          ? {
              backgroundColor: "#fff",
              color: "#000",
            }
          : {
              backgroundColor: "#000",
              color: "#fff",
            }
      }
      className="sidebar-container"
    >
      <span>{langCtx.lang === "en" ? "Sidebar" : "Thanh bên"}</span>
    </div>
  );
};

export default Sidebar;
