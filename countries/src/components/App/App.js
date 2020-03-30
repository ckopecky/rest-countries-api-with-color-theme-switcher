import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import CountryDetail from '../CountryDetail/CountryDetail';
import './App.css';
import { Switch, Route } from 'react-router-dom';

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

  selectCountry = (country) => {
    this.setState({country}, () => {
      console.log(`${country} has been set on state`);
    });
  }

  render() {
      if(this.state.loading) {
        return (
          <div>There are no countries to display</div>
        )
      } 
      
      else {
        return (
          <Switch>
            <Route exact path="/" render={(props) => {
              return <Pagination {...props} countries={this.state.countries} countryCodes={this.state.countryCodes}/>
            }} />
            <Route path="/:name" render={(props) => {
              return <CountryDetail {...props} countries={this.state.countries} countryCodes={this.state.countryCodes}/>
            }} />   
                  
            </Switch>
          
        )
        }
  }
    
}

export default App;
