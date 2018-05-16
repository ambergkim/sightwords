export const WORD_CREATE = 'WORD_CREATE';
export const WORD_RANDOM = 'WORD_RANDOM';

export function wordCreate(value) {
  return {type: WORD_CREATE, value};
}

export function wordRandom() {
  return {type: WORD_RANDOM};
}