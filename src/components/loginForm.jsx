import React from "react";
import { useState } from "react";
import avatar from "../assets/logo.png";

function LoginForm({ Login, error }) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    Login(credentials);
  };
  return (
    <div className="w-full h-full flex flex-col place-items-center rounded-3xl space-y-4 p-16 bg-white">
      <img src={avatar} alt="avatar" className="rounded-full w-12 h-12"></img>
      <h2 className="font-bold text-2xl mt-2 text-sky-700"> Platform</h2>
      <h2 className="text-xl mt-2 text-sky-500">(Sample Demo)</h2>
      
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-8/12"
      >
        <label>Username:</label>
        <input
          type="text"
          className="w-full h-10 mb-2 rounded-lg border-gray-500 border-2"
          value={credentials.name}
          onChange={(e) =>
            setCredentials({ ...credentials, name: e.target.value })
          }
        />
        <label>Email:</label>
        <input
          type="email"
          className="w-full h-10 mb-2 rounded-lg border-gray-500 border-2"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <label>Password:</label>
        <input
          type="password"
          className="w-full h-10 mb-2 rounded-lg border-gray-500 border-2"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button className="mt-8 w-4/12 border-gray-500 border-2 rounded-lg bg-sky-700 text-gray-200" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
