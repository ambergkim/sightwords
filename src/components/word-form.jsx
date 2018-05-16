import React from 'react';
import {connect} from 'react-redux';

import {
  wordCreate
} from '../actions/word-card-actions.js';

class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    let newState = {
      word: event.target.value,
    }
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.wordCreate(this.state);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
    <input onChange={this.handleInputChange} type="text" placeholder="add a word"/>
    <button type="submit">Submit</button>
  </form>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordForm);