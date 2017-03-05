import axios from 'axios';

let initState={
  allsellers : [],
  states : {},
}

const sellersReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case LOAD_ALL_SELLERS:
      nextState.allsellers = action.sellers;
      break;

    case LOAD_ALL_STATES:
      nextState.states = action.states;
      break;

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
  const states = {};
  //key=state abbrev, value is an array of sellerIDs

  sellers.forEach(brewery=>{
    if (brewery.contact.state) {
      if (states.hasOwnProperty(brewery.contact.state)){
        states[brewery.contact.state].push(brewery.id);
      } else {
        states[brewery.contact.state]=[brewery.id];
      }
    }
  })

  return {
    type: LOAD_ALL_STATES,
    states
  }

});

export default sellersReducer;
