import React from 'react';
import {connect} from 'react-redux';

import {
  wordCreate
} from '../actions/word-card-actions.js';

import './word-form.scss';

class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      isEditing: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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

  toggleEdit(event) {
    event.preventDefault();
    this.setState({isEditing: !this.state.isEditing});
  }

  render() {
    return <React.Fragment>
      <div className="gear" onClick={this.toggleEdit}>&#9881;</div>
      {
        this.state.isEditing ?
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInputChange} type="text" placeholder="add a word"/>
        <button type="submit">submit</button>
      </form> :
      <div></div> 
      }
    </ React.Fragment>
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