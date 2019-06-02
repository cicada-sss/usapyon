import React from "react";
import ReactDOM from "react-dom";

function RENAMEHERE() {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <button id="RENAMEHERE" onClick={handleClick}>RENAMEHERE</button>
  );
}

ReactDOM.render(<RENAMEHERE />, document.getElementById("RENAMEHERE"));
