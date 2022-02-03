import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          placeholder="input username"
        />
        <button type="submit">Submit</button>
      </form>
      login componenet
    </div>
  );
};

export default Login;
