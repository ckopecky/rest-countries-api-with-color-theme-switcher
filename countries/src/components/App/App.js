import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import CountryDetail from '../CountryDetail/CountryDetail';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useAxiosGet } from "./hooks/useAxiosGet";
const url = 'https://restcountries.eu/rest/v2/all';
const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ countryKey, setCountryKey ] = useState({});
  const [ loading, setLoading ] = useState(true);
  
  let countryData = useAxiosGet(url);

  useEffect(() => {
    const getCountryCodes = (data) => {
      let countryCodes = {};
      data.forEach(country => {
        const { alpha3Code, name } = country;
        countryCodes[alpha3Code] = name;
      });
      return countryCodes;
    }

    const getAndSetCountryData = () => {
      setCountries(countryData);
      let cc = getCountryCodes(countryData);
      setCountryKey(cc);
      setLoading(false)
    }
    getAndSetCountryData()
  }, [countryData]);
  
  if(loading) {
    return (
      <>
      <Navigation text="Where in the World?" />
        <div>There are no countries to display
        </div>
      </>
    )
  } 
      
  else {
    console.log(countryKey, countries)
    return (
      <>
          <Navigation text="Where in the World?" mode="light"/>            
          <Switch>
            <Route exact path="/" render={(props) => {
              return <Pagination {...props} countries={countries} countryCodes={countryKey}/>
            }} />
            <Route path="/:name" render={(props) => {
              return <CountryDetail {...props} countries={countries} countryCodes={countryKey}/>
            }} />        
        </Switch>
      </>
    )
    }
}

export default App;
