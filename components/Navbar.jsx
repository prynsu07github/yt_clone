import React from "react";
import SearchBar from "./SearchBar";
import logo from "../src/utils/assets/logo.png";

export default function Navbar() {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 10px"
        // background:
        //   "linear-gradient(108deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)"
      }}
    >
      <div className="logo">
        <h1>vX</h1>
      </div>
      <SearchBar />
    </div>
  );
}
