import React, { Component } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import './App.css';

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
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      this.state.loading ? 
      <div>There are no messages to display</div>
      : <Pagination countries={this.state.countries} countryCodes={this.state.countryCodes}/>

    )
  }
    
}

export default App;
