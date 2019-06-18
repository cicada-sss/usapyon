import React from "react";
import ReactDOM from "react-dom";

import UsafuyaButton from "./components/_UsafuyaButton.jsx";
import ShareButton from "./components/_ShareButton.jsx";
import VersionToggle from "./components/_VersionToggle.jsx";

const MainButtons = () => (
  <>
    <UsafuyaButton />
    {localStorage.usapri === false && <ShareButton />}
    <VersionToggle />
  </>
);

ReactDOM.render(<MainButtons />, document.getElementById("main-buttons"));
