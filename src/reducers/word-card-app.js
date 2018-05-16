import {
  WORD_CREATE,
  WORD_RANDOM,
} from '../actions/word-card-actions.js';
import uuidv1 from 'uuid/v1';

const initialState = {
  words: ['flower', 'house', 'car', 'happy', 'apple', 'hippopotamus', 'turtle', 'frog', 'orange', 'correct', 'cedar', 'focus', 'goes', 'cute', 'hide', 'come', 'same'],
  displayWord: 'hello'
}

export default function wordCardReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentWords;
  let newWord

  switch(action.type) {
    case WORD_CREATE:
      newWord = action.value.word;
      currentWords = state.words.slice();
      currentWords.push(action.value.word);
      newState = {
        words: currentWords,
        displayWord: newWord
      };
      return Object.assign({}, state, newState);
    case WORD_RANDOM:
      currentWords = state.words.slice();
      let randomIndex = Math.floor(Math.random() * currentWords.length);
      newWord = currentWords[randomIndex];
      newState = {
        displayWord: newWord
      };
      return Object.assign({}, state, newState);
    default: return state;
  }
}