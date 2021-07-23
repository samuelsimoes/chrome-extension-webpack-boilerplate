import ReactDOM from "react-dom";

import { v4 as uuid } from "uuid";

export default (Component, element = document.body) => {
  const id = uuid();

  const entryPoint = document.createElement("div");
  entryPoint.id = id;
  element.appendChild(entryPoint);

  return () => ReactDOM.createPortal(Component, document.getElementById(id));
};
