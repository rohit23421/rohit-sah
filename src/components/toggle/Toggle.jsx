import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img
        src="https://www.seekpng.com/png/detail/1-16568_animated-sun-rays-gif.png"
        alt=""
        className="t-icon"
      />
      <img
        src="https://i.pinimg.com/474x/59/42/f5/5942f559afb747343c4dfa528a0ec26c.jpg
"
        alt=""
        className="t-icon"
      />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
