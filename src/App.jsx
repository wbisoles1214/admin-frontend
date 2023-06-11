import React from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import "./App.css";

const App = () => {
  const handleLogin = () => {};

  const handleLogout = () => {};

  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? (
        <Admin onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
