import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";

import Header from "./components/Header";
import NotFoundPage from "./containers/NotFoundPage";
import AuthState from "./context/auth/AuthState";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthState>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<PrivateRoute component={Home} />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthState>
  );
};

export default App;

/*
  Login
  - First time user visit: login => API login => token => handle store => attach token x-auth-token + save token localstorage
  - Second time:
    + Keep authenticated status
    + Get token from localstorage => verify token? => attach token x-auth-token => redirect
  => login => loadUser  
  
  Logout:
    + isAuthenticated: false
    + remove token in localstorage
    + redirect to LoginPage

  Register:
    + Fill in form => submit
    + (1) Redirect to Login page => Login()
    + (2)Auto login => Login() => redirect Home
*/
