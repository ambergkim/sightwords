import React from 'react';
import {connect} from 'react-redux';

import './word-card.scss';

class WordCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWord: 'Hello'
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
    this.setState({currentWord: newWord});
  }

  readWord(event) {
    event.preventDefault();
    console.log('word to say', this.state.currentWord);
    responsiveVoice.speak(this.state.currentWord);
  }

  render() {
    return <React.Fragment>
        <div onClick={this.readWord} className='card'>
          <p>{this.state.currentWord}</p>
        </div>
        <button onClick={() => {this.randomWord()}}className='new-button'>new</button>
      </React.Fragment>
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