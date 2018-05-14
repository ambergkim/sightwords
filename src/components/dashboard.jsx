import React from 'react';
import {connect} from 'react-redux';

import WordCard from './word-card.jsx';
import WordForm from './word-form.jsx';

class Dashboard extends React.Component {
  render() {
    return <React.Fragment>
        <WordCard />
        <WordForm />

      </React.Fragment>
  }
}

export default Dashboard;