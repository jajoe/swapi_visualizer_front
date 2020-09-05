import styled from 'styled-components';

const Paragraph = styled.p`
  border: 4px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  margin: 0px;
  font-size: ${(props) => props.size};
`;

Paragraph.defaultProps = {
  size: '16px',
};

export default Paragraph;
