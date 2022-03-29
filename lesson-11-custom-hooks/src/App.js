import "./App.css";
import Circle from "./components/Circle";
import Square from "./components/Square";
import { tool } from "./utils";
function App() {
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <Circle />
      <Square />
    </div>
  );
}

export default App;

/*
  What is Hooks??

  - Hook is a special function
  - return data based on component
  - useFetch, useState, useEffect
  

  Hooks => reuse logic
*/
