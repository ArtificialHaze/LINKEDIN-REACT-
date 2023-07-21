import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const register = () => {
    if (!name) return alert("Please enter a name");
  };

  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img src="" alt="LinkedInLogo" />
      <form action="#">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name.."
          required
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Picture.."
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email.."
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password.."
          required
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span onClick={register} className="login__register">
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
