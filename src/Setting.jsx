import React from "react";
import ReactDOM from "react-dom";

import SettingSounds from "./components/_SettingSounds.jsx";
import SettingData from "./components/_SettingData.jsx";

const Setting = () => {
  return (
    <>
      <SettingSounds />
      <hr />
      <SettingData />
    </>
  );
}

ReactDOM.render(<Setting />, document.getElementById("setting"));
