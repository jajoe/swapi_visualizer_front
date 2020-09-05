import { combineReducers } from 'redux';
import loadingState from './loadingState';
import searchResults from './searchResults';

export default combineReducers({ loadingState, searchResults });
