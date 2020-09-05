import { SET_LOADING_STATE } from '../actionTypes';

const initialState = false;

const loadingState = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE: {
      return action.payload.loadingState;
    }
    default: {
      return state;
    }
  }
};

export default loadingState;
