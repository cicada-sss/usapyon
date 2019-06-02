import React from "react";
import ReactDOM from "react-dom";

const VersionToggle = () => {
  const handleClick = e => {
    e.preventDefault();
    $("#data-credits").fadeToggle();
  };

  return (
    <div id="version" onClick={handleClick}>
      ver.1.1.1β
    </div>
  );
};

ReactDOM.render(<VersionToggle />, document.getElementById("version-toggle"));
