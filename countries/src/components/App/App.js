import React, { useEffect, useState, useContext } from 'react';
import Pagination from '../Pagination/Pagination';
import CountryDetail from '../CountryDetail/CountryDetail';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { AppContext } from '../../context/AppContext';
import { GlobalStyle } from './AppStyle';


const App = () => {
  const { loading } = useContext(AppContext);

  if(loading) {
    return (
      <>
      <Navigation text="Where in the World?"/>
        <div>There are no countries to display
        </div>
      </>
    )
  } 
      
  else {
    return (
      <>
        <GlobalStyle />
        <Navigation text="Where in the World?" mode="light"/>            
        <Switch>
          <Route exact path="/" component={Pagination} />
          <Route path="/:name" component={CountryDetail} /> 
        </Switch>
      </>
    )
    }
}

export default App;
