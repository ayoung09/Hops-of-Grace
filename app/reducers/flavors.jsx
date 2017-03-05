import axios from 'axios';

let initState={
  flavors : [],
}

const flavorsReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case LOAD_ALL_FLAVORS:
      nextState.flavors = action.flavors;
      break;

    default:
      return prevState;
  }
  return nextState;
}

const LOAD_ALL_FLAVORS='LOAD_ALL_FLAVORS';

export const loadAllFlavors = (flavors => {
  return {
    type: LOAD_ALL_FLAVORS,
    flavors
  }

});

export default flavorsReducer;
