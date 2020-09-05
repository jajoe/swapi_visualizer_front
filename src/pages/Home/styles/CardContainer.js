import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  border: 4px solid ${({ theme }) => theme.tertiary};
  border-radius: 24px;
`;

export default CardContainer;
