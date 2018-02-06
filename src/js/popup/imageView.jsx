import React from "react";

let renderCount = 0;
export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.imageURL} alt="Smiley face" height="100" width="100" />
      </div>
    )
  }
}