import React from "react";

let renderCount = 0;
export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={this.props.imageURL} alt="Smiley face" height="125" width="125" />
      </div>
    )
  }
}