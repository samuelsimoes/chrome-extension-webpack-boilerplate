import React from "react";
import ReactDOM from "react-dom";

import AxieInfiniteApp from "../../axieInfiniteApp";

const entryPoint = document.createElement("div");
entryPoint.id = "entry-point";
entryPoint.style =
  "position: fixed; bottom:10px; right: 10px; margin-right: 10px; margin-bottom: 10px; width: fit-content; ";

document.body.appendChild(entryPoint);

ReactDOM.render(<AxieInfiniteApp />, document.getElementById("entry-point"));
