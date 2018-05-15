import {
  WORD_CREATE,
} from '../actions/word-card-actions.js';
import uuidv1 from 'uuid/v1';

const initialState = {
  words: ['flower', 'house', 'car', 'happy', 'apple', 'hippopotamus', 'turtle', 'frog', 'orange', 'correct', 'cedar', 'focus', 'goes', 'cute', 'hide', 'come', 'same'],
}

export default function wordCardReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentWords;

  switch(action.type) {
    case WORD_CREATE:
      let newWord = action.value;
      currentWords = state.words.slice();
      currentWords.push(action.value.word);
      return Object.assign({}, {words: currentWords});
    default: return state;
  }
}