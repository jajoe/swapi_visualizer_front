import React from 'react';
import attributesByTypes from '../../../constants/getDescriptionAttributes';
import AttributeWrapper from '../styles/AttributeWrapper';

/**
  This component displays each attributes of the give item
*/
const DescriptionAttributes = ({ item, type }) =>
  attributesByTypes[type].map((attribute) => (
    <AttributeWrapper attribute={attribute} value={item[attribute]} />
  ));

export default DescriptionAttributes;
