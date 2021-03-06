import React from 'react';
import {connect} from 'react-redux';

import {
  wordRandom
} from '../actions/word-card-actions.js'

import WordForm from './word-form.jsx';

import './word-card.scss';

responsiveVoice.setDefaultVoice("US English Female");

class WordCard extends React.Component {
  constructor(props) {
    super(props);

    this.randomWord = this.randomWord.bind(this);
    this.readWord = this.readWord.bind(this);
  }

  randomWord() {
    return this.props.wordRandom();
  }

  readWord(event) {
    event.preventDefault();
    responsiveVoice.speak(this.props.words.displayWord);
  }

  render() {
    return <React.Fragment>
        <div onClick={this.readWord} className='card'>
          <p>{this.props.words.displayWord}</p>
        </div>
        <div className="menu">
          <button onClick={() => {
            this.randomWord();
          }}>new</button>
          <WordForm />
        </div>
        
      </React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    words: state.words
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    wordCreate: val => dispatch(wordCreate(val)),
    wordRandom: val => dispatch(wordRandom()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordCard);