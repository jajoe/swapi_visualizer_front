import { SET_LOADING_STATE, SET_SEARCH_RESULTS } from './actionTypes';

export const setLoadingState = (newState) => ({
  type: SET_LOADING_STATE,
  payload: { loadingState: newState },
});

export const setSearchResults = (newResults) => ({
  type: SET_SEARCH_RESULTS,
  payload: { searchResults: newResults },
});
