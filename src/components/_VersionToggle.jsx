import React from "react";

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

export default VersionToggle;
