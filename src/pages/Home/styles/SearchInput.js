import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 4px;
  border-color: ${({ theme }) => theme.main};
  text-align: center;
  margin: auto;
  display: block;
  background-color: inherit;
  border: none;
`;

export default SearchInput;
