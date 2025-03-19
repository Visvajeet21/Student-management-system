import React, { useRef, useState } from "react";

const ColorChange = () => {
  const inputRef = useRef(null);
  const [color, setColor] = useState("");

  function changeColor() {
    setColor(inputRef.current.value);
  }

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onChange={changeColor}
        placeholder="Enter a color"
      />
      <div style={{ backgroundColor: color, marginTop: "10px", width: "50px" }}>
        See Me
      </div>
    </>
  );
};

export default ColorChange;
