import React, { useContext } from "react";
import AllContext from "../context/context";

const Header = () => {
  const { setDarkMode } = useContext(AllContext);

  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() => setDarkMode((previousDarkMode) => !previousDarkMode)}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
