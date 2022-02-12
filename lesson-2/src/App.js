import ProductContainer from "./container/ProductContainer";
import "./App.css";
// La 1 functional component
const App = () => {
  return (
    <div className="shopping-container">
      <ProductContainer />
    </div>
  );
};

export default App;

// React chia lam 2 loai component:
// Statefull component (Class Component)
// Stateless component (Functional Component)

//JSX - Javascript XML
