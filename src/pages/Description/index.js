import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import DescriptionView from './DescriptionView';

/**
  The Description page, which displays the attributes about one item from SWAPI. 
  Reminder : searchResults is an object which includes the type and each attributes of the item.
*/
const Description = ({ searchResults }) => {
  return searchResults?.type ? (
    <DescriptionView searchResults={searchResults} />
  ) : (
    <Redirect push to="/" />
  );
};

const mapStateToProps = (state) => {
  return { searchResults: state.searchResults };
};

export default connect(mapStateToProps, {})(Description);
