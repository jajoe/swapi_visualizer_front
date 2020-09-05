import React from 'react';

const AttributeWrapper = ({ attribute, value }) => (
  <>
    <b>{attribute}</b> : {value || 'N/A'}
    <br />
  </>
);

export default AttributeWrapper;
