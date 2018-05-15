const validator = store => next => action => {  
  if (action.type === 'CATEGORY_CREATE') {
    
  }

  let result = next(action);
  return result;
}

export default validator;