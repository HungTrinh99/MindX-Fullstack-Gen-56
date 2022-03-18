import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./containers/Home";
import AboutPage from "./containers/About";
import NotFoundPage from "./containers/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="me-2">
          Home
        </Link>
        <Link to="/about" className="me-2">
          About
        </Link>
        <Link to="/i-dont-know-1" className="me-2">
          Dont know 1
        </Link>
        <Link to="/i-dont-know-2" className="me-2">
          Dont know 2
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
