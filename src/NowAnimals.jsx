import React from "react";
import ReactDOM from "react-dom";

const NowAnimals = () => {
  return (
    <div style={{fontSize: "500%"}}>
      {usagi}匹のうさぎがいます
      {kuma >= 1 && (
        <>
          <br />
          {kuma}匹のくまがいます
        </>
      )}
      {risu >= 1 && (
        <>
          <br />
          {risu}匹のりすがいます
        </>
      )}
      {aja >= 1 && (
        <>
          <br />
          {aja}匹のあじゃがいます
        </>
      )}
    </div>
  );
};

setInterval(function() {
  ReactDOM.render(<NowAnimals />, document.getElementById("now-animals"));
}, 100);
