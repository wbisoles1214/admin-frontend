import React from "react";

const Admin = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Admin;
