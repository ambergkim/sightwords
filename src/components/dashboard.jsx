import React from 'react';
import {connect} from 'react-redux';

import WordCard from './word-card.jsx';

import '../style/main.scss';

class Dashboard extends React.Component {
  render() {
    return <React.Fragment>
        <WordCard />
        <p>Click on the word or card to hear the word.</p>
        <p>Add a new word by clicking on the gear icon and using the form.</p>
      </React.Fragment>
  }
}

export default Dashboard;