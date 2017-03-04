import axios from 'axios';

let initState={
  sellers : [],
  states : [],
}

const sellersReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case LOAD_ALL_SELLERS:
      return action.sellers;
    case LOAD_ALL_STATES:
      return action.states;
    default:
      return prevState;
  }
  return nextState;
}

const LOAD_ALL_SELLERS='LOAD_ALL_SELLERS';
const LOAD_ALL_STATES='LOAD_ALL_STATES';

export const loadAllSellers = (sellers => {
  return {
    type: LOAD_ALL_SELLERS,
    sellers
  }

});

export const loadAllStates = (sellers => {
  const states = [];
  //finish this series of actions after dinner!

  return {
    type: LOAD_ALL_STATES,
    states
  }

});

export default sellersReducer;
