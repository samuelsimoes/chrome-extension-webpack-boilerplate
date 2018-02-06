import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import ImageView from './imageView.jsx';
import secrets from './secrets.js';
import axios from 'axios';

const unsplash = new Unsplash({
  applicationId: secrets.UNSPLASH_APP_ID,
  secret: secrets.UNSPLASH_SECRET,
  callbackUrl: secrets.UNSPLASH_CALLBACK
});

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordImages: [],
      word: "dog",
      definition: [],
      audioData: []
    }
  }
  componentDidMount() {
    let wordnikStart = "http://api.wordnik.com:80/v4/word.json";
    let definitionEnd = `definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=${secrets.WORDNIK_API_KEY}`;
    let audioEnd = `audio?useCanonical=false&limit=50&api_key=${secrets.WORDNIK_API_KEY}`
    let word = this.state.word;

    // Request for Photographs
    unsplash.search.photos('dogs', 1, 4)
      .then(toJson)
      .then(json => {
        this.setState({ wordImages: json });
      });

    // Request for Definition
    axios.get(`${wordnikStart}/${word}/${definitionEnd}`)
      .then(toJson)
      .then(item => {
        console.log('wordData', item.data);
        this.setState({ definition: item.data });
      });

    // Request for audio
    axios.get(`${wordnikStart}/${word}/${audioEnd}`)
      .then(toJson)
      .then(item => {
        console.log('audio', item.data);
        this.setState({ audioData: item.data });
      });
  }
  render() {
    console.log(this.state);
    let imageArr = this.state.wordImages.results;
    let wordData = this.state.definition;
    let audioData = this.state.audioData;
    if (!imageArr || !wordData.length || !audioData.length) return (<div />);
    return (
      <div>
        {imageArr.map(image => <ImageView imageURL={image.urls.small} />)}
        <h2>{this.state.word}</h2>
        <p>{wordData[0].text}</p>
        <audio controls>
          <source src={this.state.audioData[0].fileUrl} />
        </audio>
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
