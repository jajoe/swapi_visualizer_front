import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { delayBetweenTwoRequestsInTheHomeInput as debounceDelay } from '../../config/index';

import { setLoadingState, setSearchResults } from '../../redux/actions';
import getData from '../../helpers/getData';

import HomeView from './HomeView';

const Home = ({
  loadingState,
  searchResults,
  setLoadingState,
  setSearchResults,
}) => {
  const [inputText, setInputText] = useState('');
  const [debouncedApiCall] = useState(() => debounce(getData, debounceDelay));
  const [filter, setFilter] = useState('all');

  // refresh the results when the filter has been changed
  useEffect(() => {
    handleSearchChange();
  }, [filter]);

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (event) => {
    let value = event?.target?.value;
    if (value === undefined) {
      value = inputText;
    }
    // when value === undefined, it means something wrong happened or the function is called when the filter has been changed
    // however value === '', it means that the inputText is just empty.
    // So !loadingState && value === '' we need to empty the current results
    if (!loadingState) {
      setInputText(value);
      if (value === '') {
        setSearchResults([]);
      } else {
        debouncedApiCall({
          filter: filter,
          inputText: value,
          setLoadingState,
          setSearchResults,
          loadingState,
        });
      }
    }
  };

  return (
    <HomeView
      filter={filter}
      handleChangeFilter={handleChangeFilter}
      handleSearchChange={handleSearchChange}
      inputText={inputText}
      loadingState={loadingState}
      searchResults={searchResults}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loadingState: state.loadingState,
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps, { setLoadingState, setSearchResults })(
  Home
);
