import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import CountryDetail from '../CountryDetail/CountryDetail';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import useAxiosGet from "./hooks/useAxiosGet";
import useCountryCodes from "./hooks/useCountryCodes";
const url = 'https://restcountries.eu/rest/v2/all';
const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ countryCodes, setCountryCodes ] = useState({});
  const [ loading, setLoading ] = useState(true);

  let countryData = useAxiosGet(url);
  let codes = useCountryCodes(url);
  useEffect(() => {
    setCountries(countryData);
    setCountryCodes(codes);
    setLoading(false);
  }, [codes, countryData]);
    

  
  if(loading) {
    return (
      <>
      <Navigation text="Where in the World?" mode="light"/>
        <div>There are no countries to display
        </div>
      </>
    )
  } 
      
  else {
    return (
      <>
          <Navigation text="Where in the World?" mode="light"/>            <Switch>
          <Route exact path="/" render={(props) => {
            return <Pagination {...props} countries={countries} countryCodes={countryCodes}/>
          }} />
          <Route path="/:name" render={(props) => {
            return <CountryDetail {...props} countries={countries} countryCodes={countryCodes}/>
          }} />        
        </Switch>
      </>
    )
    }
}

export default App;
