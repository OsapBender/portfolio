import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from 'Context/ThemeContext';
import PageMain from 'Components/pageMain';
import PageLibrary from 'Components/pageLibrary';
import Navbar from 'Components/Navbar';
import { IThemeProps, IThemeProviderProps } from 'Types/theme';

const Container = styled.div<IThemeProps>`
  min-height: 100%;
  width: 100%;
  background: red;
  ${(props: { isLight: boolean }) =>
    props.isLight ? 'background: #fff;' : 'background: #2b2b2b;'}
`;

const Wrapper = styled.div<{ isLight: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1280px;
  margin: 0 auto;
  padding: 10px 20px 40px;

  @media (max-width: 1280px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 100%;
    border: 0;
  }
`;

const App = (): JSX.Element => {
  const [isLight, setLight] = useState(true);

  const providerValue: IThemeProviderProps = {
    isLight,
    setLight,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      <Container isLight={isLight}>
        <Wrapper isLight={isLight}>
          <Navbar />
          <Switch>
            <Route exact={true} path={'/'} component={PageMain} />
            <Route exact={true} path={'/library'} component={PageLibrary} />
          </Switch>
        </Wrapper>
      </Container>
    </ThemeContext.Provider>
  );
};

export default App;
