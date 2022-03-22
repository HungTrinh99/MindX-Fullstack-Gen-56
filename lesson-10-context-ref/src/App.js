import { useState } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import Body from "./components/layouts/Body";

import Footer from "./components/layouts/Footer";
import LangCtx from "./context/language";
import ThemeContext from "./context/theme";
import StopWatch from "./components/Stopwatch";

function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");

  const onChangeLanguage = (newLang) => {
    setLang(newLang);
  };
  const onChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };
  return (
    <div className="App">
      <LangCtx.Provider value={{ lang: "en", setLang: onChangeLanguage }}>
        <ThemeContext.Provider
          value={{ theme: "dark", setTheme: onChangeTheme }}
        >
          <Navbar />
          <div className="main-container">
            <Sidebar lang={lang} />
            <Body>
              {/* <ProductList /> */}
              <StopWatch />
              <StopWatch />
              <StopWatch />
              <StopWatch />
              <StopWatch />
            </Body>
          </div>
        </ThemeContext.Provider>
        <Footer />
      </LangCtx.Provider>
    </div>
  );
}

export default App;
