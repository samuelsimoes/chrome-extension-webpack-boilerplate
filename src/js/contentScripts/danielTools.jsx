import React from "react";
import ReactDOM from "react-dom";

import DanielTools from "../../danielTools";

const entryPoint = document.createElement("div");
entryPoint.id = "entry-point";
entryPoint.style =
  "position: sticky; bottom:10px; left: 100%; margin-right: 10px; margin-bottom: 10px; width: fit-content; ";

document.body.appendChild(entryPoint);

ReactDOM.render(<DanielTools />, document.getElementById("entry-point"));
