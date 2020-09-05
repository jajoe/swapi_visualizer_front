import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import LoaderSpinner from '../../../components/LoaderSpinner';

import Card from './Card';
import { setSearchResults } from '../../../redux/actions';

/**
  Display the list of the result of the query in the home page. Each result = 1 card
  When we click on a card, we should see the description of the selected item in another page
  @param loadingState boolean which defines if a query is in progress
  @param searchResults the array with the results. Each result includes a name, a title and type
  @param setSearchResults a function which will select the content of a card to see a full description (in a new page)
*/
const Cards = ({
  loadingState = false,
  searchResults = [],
  setSearchResults,
}) => {
  const [redirectToDescription, setRedirectToDescription] = useState(false);
  if (redirectToDescription) {
    return <Redirect push to="/description" />;
  }

  const isSearchResultNotEmpty = searchResults.length > 0 && searchResults[0];

  return isSearchResultNotEmpty ? (
    searchResults.map(({ name, title, type }, id) => (
      <Card
        id={id}
        key={name || title}
        content={name || title}
        onClick={() => {
          setSearchResults(searchResults[id]);
          setRedirectToDescription(true);
        }}
        type={type}
      />
    ))
  ) : loadingState ? (
    <div>
      <LoaderSpinner />
    </div>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingState: state.loadingState,
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps, { setSearchResults })(Cards);
