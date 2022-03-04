import "./App.css";
import DemoForm from "./DemoForm";
import DemoState from "./DemoState";
import ChangeCarColor from "./DemoState/ChangeCarColor";
import SmartPhoneStore from "./SmartPhoneStore/SmartPhoneStore";
import TodoApp from "./TodoApp/TodoApp";
function App() {
  return (
    <div className="App">
      {/* <DemoState name="Hung Trinh"/> */}
      {/* <ChangeCarColor /> */}
      {/* <SmartPhoneStore /> */}
      {/* <DemoForm /> */}
      <TodoApp />
    </div>
  );
}

export default App;

// Client side rendering - CSR
// Server side rendering - SSR
// Component - props
//  1. Class-based component (Statefull component)
//  2. Functional component (Stateless component)

// Different between "real dom" vs "vitural dom"
