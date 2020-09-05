import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// rgb(162,17,10) is the value of the secondary color, and rgb(243,202,48) the value of the tertiary color. Please to apply one of the following modifications :
// - modify the theme, so that we could use either the HEX or the RGB format of the colors, i.e we need to have the theme with the following format : theme = { primary : { hex: "...", rgb: "..." } }
// - or we could just use a function to transform HEX to RGB. But it could slow down the app

/**
  A loader, which takes in input the speed of the animation
*/
const LoaderSpinner = styled.div`
  margin: 0 auto;
  animation: ${rotate360} ${({ speed }) => speed} linear infinite;
  transform: translateZ(0);

  border-top: 2px solid rgb(243, 202, 48);
  border-right: 2px solid rgb(243, 202, 48);
  border-bottom: 2px solid rgb(243, 202, 48);
  border-left: 4px solid rgb(162, 17, 10);
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

LoaderSpinner.defaultProps = {
  speed: '1s',
};

export default LoaderSpinner;
