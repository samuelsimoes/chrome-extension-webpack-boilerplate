import React from "react";
import icon from "../../img/icon-128.png"
import { hot } from "react-hot-loader";

class GreetingComponent extends React.Component {
  render () {
    return (
      <div>
        <p>Hello, find me on src/js/popup/greeting_component.jsx</p>
        <img src={icon} />
      </div>
    )
  }
};

export default hot(module)(GreetingComponent)
