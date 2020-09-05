import React from 'react';

import Cards from './components/Cards';
import arrayOfFilters from '../../constants/homeFilters';

import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';
import { SearchInput } from './styles/index';

const HomeView = ({
  filter,
  handleChangeFilter,
  handleSearchChange,
  inputText,
  loadingState,
  searchResults,
}) => (
  <>
    <Title style={{ marginBottom: '32px' }}>SWAPI exporation</Title>
    <Paragraph style={{ padding: '8px 16px', textAlign: 'center' }}>
      Cette application web a pour but d'explorer la base de données SWAPI.
      <br />
      <br />
      Vous désirez filtrer ? Sélectionnez un filtre ci-dessous :
      <br />
      <select
        style={{ marginTop: '16px' }}
        value={filter}
        onChange={handleChangeFilter}
      >
        {arrayOfFilters.map((opt) => (
          <option value={opt.value}>{opt.text}</option>
        ))}
      </select>
    </Paragraph>
    <Paragraph
      style={{
        margin: '32px auto',
        width: 'fit-content',
        borderRadius: '24px',
      }}
    >
      <SearchInput
        type="text"
        onChange={handleSearchChange}
        placeholder="Entrez votre recherche !"
        value={inputText}
      />
    </Paragraph>
    <Cards />
  </>
);

export default HomeView;
