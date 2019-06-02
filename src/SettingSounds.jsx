import React from "react";
import ReactDOM from "react-dom";

import MuteSE from "./components/_MuteSE.jsx";
import MuteBGM from "./components/_MuteBGM.jsx";
import PlayKorobushka from "./components/_PlayKorobushka.jsx";
import PlayCarmen from "./components/_PlayCarmen.jsx";
import PlayUsapri from "./components/_PlayUsapri.jsx";

function SettingSounds() {
  return (
    <>
      <h1>音設定</h1>
      <MuteSE />
      <MuteBGM />
      <PlayKorobushka />
      <PlayCarmen />
      <PlayUsapri />
    </>
  );
}

ReactDOM.render(<SettingSounds />, document.getElementById("setting-sounds"));
