import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor); //this function is the same os handleChangeColor()
    //which means that newColor is the value of newChildColor and is passed here to cinvoke
    //getrandomColor() and change the color of parent when child is clicked
  }
  console.log(onChangeColor);
  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
