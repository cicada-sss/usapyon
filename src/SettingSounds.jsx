import React from "react";
import ReactDOM from "react-dom";

import MuteSE from "./components/MuteSE.jsx";
import MuteBGM from "./components/MuteBGM.jsx";
import PlayKorobushka from "./components/PlayKorobushka.jsx";
import PlayCarmen from "./components/PlayCarmen.jsx";
import PlayUsapri from "./components/PlayUsapri.jsx";

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
