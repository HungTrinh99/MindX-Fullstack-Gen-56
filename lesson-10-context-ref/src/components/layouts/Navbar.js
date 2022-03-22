import React, { useContext } from "react";
import LangCtx from "../../context/language";
import ThemeContext from "../../context/theme";

const Navbar = (props) => {
  const langContext = useContext(LangCtx);
  const themeContext = useContext(ThemeContext);
  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <span>Shopping</span>
      </div>
      <div className="navbar-controller">
        <select
          className="navigation-dropdown"
          value={themeContext.theme}
          onChange={(event) => themeContext.setTheme(event.target.value)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <select
          className="navigation-dropdown"
          value={langContext.lang}
          onChange={(event) => langContext.setLang(event.target.value)}
        >
          <option value="en">En-US</option>
          <option value="vi">Vi-VN</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
