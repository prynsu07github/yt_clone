import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="container">
      <div className="log-in-page">
        <div className="form-look"></div>
        <h1 style={{ color: "#00d4ff" }}>videoNex</h1>
        <form method="post">
          <label htmlFor="username" id="user-name">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            autoFocus="on"
            required
          />
          <label htmlFor="password" id="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            required
          />
          <button type="submit" id="login-btn">
            Log In
          </button>
        </form>
        <a
          href="/registraion"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Don't have account? Register
        </a>
      </div>
    </div>
  );
}
