import React from 'react';
import {connect} from 'react-redux';

import say from 'say';

class WordCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWord: ''
    }

    this.randomWord = this.randomWord.bind(this);
    this.readWord = this.readWord.bind(this);
  }

  randomWord() {
    let currentWords = this.props.words;
    console.log('current words for card', currentWords);
    let randomIndex = Math.floor(Math.random() * currentWords.length);
    console.log('random index', randomIndex);
    let newWord = currentWords[randomIndex];
    this.state = {
      currentWord: newWord
    }
    return <p>{newWord}</p>
  }

  readWord(event) {
    event.preventDefault();
    console.log('word to say', this.state.currentWord);
    say.speak('Hello!', 'Alex');
  }

  render() {
    return <div>
      <h1>Random Word:</h1>
      <h2>{this.randomWord()}</h2>
      <button onClick={this.readWord}>read</button>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    words: state.words.words
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    wordCreate: val => dispatch(wordCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordCard);