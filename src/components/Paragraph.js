import styled from 'styled-components';

const hexToRgb = (rawHex) => {
  // http://stackoverflow.com/a/5624139
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hex = rawHex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  result = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null
  return result ? `rgb(${result.r}, ${result.g}, ${result.b})` : 'rgb(0, 0 ,0)'
};

const Paragraph = styled.p`
  ${({ size, theme }) => `
    border: 4px solid;
    border-image: linear-gradient(45deg, ${hexToRgb(theme.tertiary)} 0%, ${hexToRgb(theme.tertiary)} 50%, ${hexToRgb(theme.lightred)} 100%) 1;
    color: ${theme.secondary};
    margin: 0px;
    font-size: ${size};
  `}
`;

Paragraph.defaultProps = {
  size: '16px',
};

export default Paragraph;
