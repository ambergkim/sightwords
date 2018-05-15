import {combineReducers} from 'redux';

import wordCardApp from './word-card-app.js'

export default combineReducers({
  words: wordCardApp
});