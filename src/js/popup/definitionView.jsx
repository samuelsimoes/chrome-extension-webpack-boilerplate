import React from "react";

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
    );
  }
}
