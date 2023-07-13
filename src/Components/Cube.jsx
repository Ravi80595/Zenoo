import React, { useState } from "react";
import '../CSS/Cube.css'

const Cube = () => {

  return (
    <div
      className='cube'>
      <div className="face front">Zeeno</div>
      <div className="face back">Brand 1</div>
      <div className="face right">Brand 2</div>
      <div className="face left">Brand 3</div>
      <div className="face top">Brand 4</div>
      <div className="face bottom">Brand 5</div>
    </div>
  );
};

export default Cube;
