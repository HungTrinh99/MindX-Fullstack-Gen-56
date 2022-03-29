import { createContext } from "react";

const LangCtx = createContext({
  lang: "en",
  setLang: () => {},
});

export default LangCtx;
