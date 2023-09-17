import React from "react";
import { categories } from "../src/utils/constants";

export default function SideBar(props) {
  // console.log(props);
  const activeAnimation = () => {};
  return (
    <div className="side-bar">
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              props.setSelectedItem(category.name);
              activeAnimation();
            }}
            style={{
              color: category.name === props.SelectedItem ? "#fff" : "#E8FFCE",
              background:
                category.name === props.SelectedItem
                  ? "linear-gradient( -86.3deg,  rgba(0,119,182,1) 3.6%, rgba(8,24,68,1) 87.6% )"
                  : "transparent",
              opacity: category.name === props.SelectedItem ? "1" : "0.5"
            }}
          >
            {category.icon}
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
