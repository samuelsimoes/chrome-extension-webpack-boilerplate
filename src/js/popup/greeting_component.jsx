import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import ImageView from './imageView.jsx';

const unsplash = new Unsplash({
  applicationId: 'cddfbdb3b08a9e68a8766d6ab7c07893a3ef6571020af994bf21b5631c6be802',
  secret: '234b6003eac47b8ac815c977e157d96b72d23b687723f5d2af4dd07430c4c721',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
});

let renderCount = 0;
export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordImages: [],
    }
  }
  componentDidMount() {
    unsplash.search.photos('dogs', 1, 4)
      .then(toJson)
      .then(json => {
        this.setState({ wordImages: json });
      });
  }
  render() {
    let imageArr = this.state.wordImages.results;
    return (
      <div>
        {imageArr.map(image => <ImageView imageURL={image.urls.small} />)}
        <h2>Dogs</h2>
        <p>a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice. It is widely kept as a pet or for work or field sports.</p>
        <button>Audio</button>
      </div>
    );
  }
}

// JSX Structure:
// XX Picture:
// XX Picture:
// XX Picture:
// XX Picture:
// XX Word Name:
// XX Word Def:
// XX Audio:

// Flickr:
//    map(picture => pictureComponent);
//  Wordnik:
//    wordName:
//    wordDef:
//    audioButton:
