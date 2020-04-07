import React, { useEffect, useState, useContext } from 'react';
import Pagination from '../Pagination/Pagination';
import CountryDetail from '../CountryDetail/CountryDetail';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { AppContext } from '../../context/AppContext';
import { GlobalStyle, dark, light } from './AppStyle';
import { ThemeProvider, ThemeContext } from 'styled-components';

let currentTheme = {
  background: light.background,
  color: light.text
}
const theme = (mode) => {
  console.log(mode, "theme");
  currentTheme = mode === "light" ? {
    background: dark.background,
    inputBackground: dark.inputBackground,
    color: dark.text,
    elements: dark.elements
  } : {
    inputBackground: light.inputBackground,
    background: light.background,
    color: light.text,
    elements: light.elements
  }
  return currentTheme;
}

const App = () => {
  const c = useContext(AppContext);
  const themeContext = useContext(ThemeContext);
  const { loading, themeMode } = c.context;

  


  if(loading) {
    return (
      <ThemeProvider theme={() => theme(themeMode)}>
        <>
        <GlobalStyle />
        <Navigation text="Where in the World?"/>
          <div>There are no countries to display
          </div>
        </>
      </ThemeProvider>
    )
  } 
      
  else {
    return (
      <ThemeProvider theme={() => theme(themeMode)}>
      <>
        <GlobalStyle />
        <Navigation text="Where in the World?" mode={themeMode}/>            
        <Switch>
          <Route exact path="/" component={Pagination} />
          <Route path="/:name" component={CountryDetail} /> 
        </Switch>
      </>
      </ThemeProvider>
    )
    }
}

export default App;
