import React from 'react';
import { Link } from 'react-router-dom';

import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';
import DescriptionAttributes from './components/DescriptionAttributes';

const DescriptionView = ({ searchResults }) => (
  <>
    <Title style={{ marginBottom: '32px' }}>Fiche de description</Title>
    <Paragraph
      style={{
        padding: '8px 16px',
        textAlign: 'center',
        marginBottom: '32px',
      }}
    >
      <DescriptionAttributes item={searchResults} type={searchResults.type} />
    </Paragraph>
    <Paragraph style={{ padding: '8px 16px', textAlign: 'center' }}>
      <Link to="/">Retour à la page de recherche</Link>
    </Paragraph>
  </>
);

export default DescriptionView;
