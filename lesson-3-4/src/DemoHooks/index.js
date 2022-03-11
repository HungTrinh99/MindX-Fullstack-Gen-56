import { useEffect, useState } from "react";
import Homepage from "./Homepage";
import Login from "./Login";

const DEFAULT_EMAIL = "admin@gmail.com";
const DEFAULT_PASSWORD = "admin";

const DemoHooks = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const onLogIn = (values) => {
    const { email, password } = values;
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", true);
    }
  };

  const onLogOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    //.....
  };

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="container">
      {!isAuthenticated ? (
        <Login onLogIn={onLogIn} />
      ) : (
        <Homepage onLogOut={onLogOut} />
      )}
    </div>
  );
};

export default DemoHooks;

// 1. componentDidMount === useEffect with empty dependencies
// 2. componentWillUnmount = useEffect with cleanup function

