import React, { useContext } from "react";
import ThemeContext from "../../context/theme";
const Sidebar = (props) => {
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext;
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
      <span>{props.lang === "en" ? "Sidebar" : "Thanh bên"}</span>
    </div>
  );
};

export default Sidebar;
