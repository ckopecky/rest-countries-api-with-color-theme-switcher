import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import CountryDetail from '../CountryDetail/CountryDetail';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

class App extends Component {
  state = {
    countries: [],
    countryCodes: {},
    loading: true
  }

  async componentDidMount() {
    let fetch = await axios.get('https://restcountries.eu/rest/v2/all');
    if(fetch) {
      let countryCodes = {};
      fetch.data.forEach(country => {
        countryCodes[country.alpha3Code] = country.name;
      });
      this.setState({countries: fetch.data, countryCodes, loading: false });
    } else {
      this.setState({ loading: false }, console.log("problem with fetching countries"));
    }
  }

  render() {
      if(this.state.loading) {
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
                return <Pagination {...props} countries={this.state.countries} countryCodes={this.state.countryCodes}/>
              }} />
              <Route path="/:name" render={(props) => {
                return <CountryDetail {...props} countries={this.state.countries} countryCodes={this.state.countryCodes}/>
              }} />        
            </Switch>
          </>
        )
        }
  }
    
}

export default App;
