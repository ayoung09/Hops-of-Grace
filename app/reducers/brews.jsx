import axios from 'axios';

let initState={
  brews : [],
}

const brewReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case LOAD_ALL_BREWS:
      nextState.brews = action.brews;
      break;

    default:
      return prevState;
  }
  return nextState;
}

const LOAD_ALL_BREWS='LOAD_ALL_BREWS';

export const loadAllBrews = (brews => {
  return {
    type: LOAD_ALL_BREWS,
    brews
  }

});

export default brewReducer;
