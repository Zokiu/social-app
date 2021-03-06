import React from "react";

const Header = ({ user, setUser }) => {
  return (
    <div>
      <p>Welcome, {user}!</p>
      <button onClick={() => setUser("")}>log out</button>
    </div>
  );
};

export default Header;
