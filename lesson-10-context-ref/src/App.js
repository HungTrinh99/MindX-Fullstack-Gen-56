import { useState } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import Body from "./components/layouts/Body";

import Footer from "./components/layouts/Footer";
import LangCtx from "./context/language";
import ThemeContext from "./context/theme";
import StopWatch from "./components/Stopwatch";
import ProductList from "./components/ProductList";

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
      <LangCtx.Provider value={{ lang: lang, setLang: onChangeLanguage }}>
        <ThemeContext.Provider
          value={{ theme: theme, setTheme: onChangeTheme }}
        >
          <Navbar />
          <div className="main-container">
            <Sidebar />
            <Body>
              <ProductList />
              {/* <StopWatch />
              <StopWatch />
              <StopWatch />
              <StopWatch />
              <StopWatch /> */}
            </Body>
          </div>
          <Footer />
        </ThemeContext.Provider>
      </LangCtx.Provider>
    </div>
  );
}

export default App;


