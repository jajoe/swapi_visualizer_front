import axios from 'axios';
import { serverURL } from '../config/index';
import types from '../constants/types';

// TODO : rename either the function (getData) or its arguments, because the name of the args = too specific, or
// maybe its the name of the function which is too generic

/**
  Function which ask the data from SWAPI to the backend when loadingState is false.
  The filter defines the category of data expected (or 'all' if we want all the data) and the inputText is 
  the text which should be included in the results.
  @param filter The category (see the constant types, which includes all the enabled values for the category)
  @param inputText The text to use as a filter, i.e each item from the result should include this text.
  @param loadingState A boolean which is true if a request is already sent
  @param setLoadingState A callback function which take in input the new loadingState value
  @param setSearchResults The callback function which will take the results as input
*/
const getData = ({
  filter = types.ALL,
  inputText,
  loadingState,
  setLoadingState,
  setSearchResults,
}) => {
  if (!loadingState && inputText && inputText.length > 1) {
    setLoadingState(true);
    axios
      .get(`${serverURL}/${filter}/${encodeURI(inputText)}`)
      .then((result) => {
        setSearchResults(result.data);
      })
      .finally(() => {
        setLoadingState(false);
      });
  }
};

export default getData;
