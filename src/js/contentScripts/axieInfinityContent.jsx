import React from "react";
import ReactDOM from "react-dom";

import AxieInfiniteApp from "../../axieInfiniteApp";

const entryPoint = document.createElement("div");
entryPoint.id = "entry-point";
document.body.appendChild(entryPoint);

ReactDOM.render(<AxieInfiniteApp />, document.getElementById("entry-point"));
