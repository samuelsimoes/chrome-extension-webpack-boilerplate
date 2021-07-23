import ReactDOM from "react-dom";

import { v4 as uuid } from "uuid";

export default (Component) => {
  const id = uuid();

  const entryPoint = document.createElement("div");
  entryPoint.id = id;
  document.body.appendChild(entryPoint);

  return () => ReactDOM.createPortal(Component, document.getElementById(id));
};
