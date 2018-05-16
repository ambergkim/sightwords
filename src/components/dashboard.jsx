import React from 'react';
import {connect} from 'react-redux';

import WordCard from './word-card.jsx';
import WordForm from './word-form.jsx';

import '../style/main.scss';

class Dashboard extends React.Component {
  render() {
    return <React.Fragment>
        <WordCard />
        <WordForm />
        <p>Click on the word or card to hear the word.</p>
        <p>Add a word or sentence using the form above. It will show randomly when you click on 'new'.</p>
      </React.Fragment>
  }
}

export default Dashboard;