import "./App.css";
import Circle from "./components/Circle";
import ClockApp from "./components/ClockApp";
import Square from "./components/Square";
import { useMediaQuery } from "./hooks";

function App() {
  const viewport = useMediaQuery();
  const { width } = viewport;

  if (width >= 1024) {
    return <Circle />;
  } else if (width >= 768) {
    return <Square />;
  } else {
    return <ClockApp />;
  }
}

export default App;

/*
  What is Hooks??

  - Hook is a special function
  - return data based on component
  - useFetch, useState, useEffect
  

  Hooks => reuse logic
*/
