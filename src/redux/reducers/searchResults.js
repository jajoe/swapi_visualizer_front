import { SET_SEARCH_RESULTS } from '../actionTypes';

const initialState = [];

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return action.payload.searchResults;
    }
    default: {
      return state;
    }
  }
};

export default searchResults;
