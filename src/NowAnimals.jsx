import React from "react";
import ReactDOM from "react-dom";

const NowAnimals = () => {
  return (
    <div style={{fontSize: "500%"}}>
      {usagi}匹のうさぎがいます
      {animals.kuma >= 1 && (
        <>
          <br />
          {animals.kuma}匹のくまがいます
        </>
      )}
      {animals.risu >= 1 && (
        <>
          <br />
          {animals.risu}匹のりすがいます
        </>
      )}
      {animals.aja >= 1 && (
        <>
          <br />
          {animals.aja}匹のあじゃがいます
        </>
      )}
    </div>
  );
};

setInterval(function() {
  ReactDOM.render(<NowAnimals />, document.getElementById("now-animals"));
}, 100);
