import React from "react";
import icon from "../../img/icon-128.png";
import Unsplash, { toJson } from 'unsplash-js';
import ImageView from './imageView.jsx';

const unsplash = new Unsplash({
  applicationId: "cddfbdb3b08a9e68a8766d6ab7c07893a3ef6571020af994bf21b5631c6be802",
  secret: "234b6003eac47b8ac815c977e157d96b72d23b687723f5d2af4dd07430c4c721",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

let renderCount = 0;
export default class Main extends React.Component {
  componentDidMount() {
    console.log("Doing stuff...")
    unsplash.search.photos("dogs", 1, 4)
      .then(toJson)
      .then(json => {
        console.log(json)
      });
  }
  render() {
    console.log("RENDER #", renderCount++)
    return (
      <div>
        <p>Hello, find me on src/js/popup/greeting_component.jsx</p>
        <ImageView imageURL={"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIwNjA4fQ&s=2df218259b5c5ae1d2fcce3df052a909"} />
        <ImageView imageURL={"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIwNjA4fQ&s=2df218259b5c5ae1d2fcce3df052a909"} />
        <ImageView imageURL={"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIwNjA4fQ&s=2df218259b5c5ae1d2fcce3df052a909"} />
        <ImageView imageURL={"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIwNjA4fQ&s=2df218259b5c5ae1d2fcce3df052a909"} />
      </div>
    )
  }
}

// JSX Structure:
// Picture:
// Picture:
// Picture:
// Picture:
// Word Name:
// Word Def:
// Audio:

// Flickr:
//    map(picture => pictureComponent);
//  Wordnik:
//    wordName:
//    wordDef:
//    audioButton:
