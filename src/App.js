import React from 'react';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router';

import store from './redux/store';
import Home from './pages/Home';
import Description from './pages/Description';
import theme from './theme';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Body = styled.div`
  ${({ theme }) => `
    color: white;
    background-color: ${theme.main};
  `}
  padding: 32px;
`;

const Div = styled.div`
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <Body>
              <Div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/description" component={Description} />
                  <Redirect to="/" />
                </Switch>
              </Div>
            </Body>
          </Container>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
