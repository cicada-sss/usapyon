import React from "react";
import ReactDOM from "react-dom";

import MuteSE from "./_MuteSE.jsx";
import MuteBGM from "./_MuteBGM.jsx";
import PlayKorobushka from "./_PlayKorobushka.jsx";
import PlayCarmen from "./_PlayCarmen.jsx";
import PlayUsapri from "./_PlayUsapri.jsx";

const SettingSounds = () => {
  return (
    <section>
      <h1>音設定</h1>
      <MuteSE />
      <br />
      <MuteBGM />
      <br />
      <PlayKorobushka />
      <br />
      <PlayCarmen />
      <br />
      <PlayUsapri />
    </section>
  );
};

ReactDOM.render(<SettingSounds />, document.getElementById("setting-sounds"));
