import { createContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  themeChange: () => {},
});

export default ThemeContext;
