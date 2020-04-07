import React from 'react';
import { Link } from 'react-router-dom';
import "./CountryMain.css";
import { CountryStyle, CountryStyledLink } from './CountryStyle';

const CountryMain = (props) => {
    console.log("country main", props.country);
    const { name, flag, population, region, capital } = props.country;

    return (
        <CountryStyle id={props.alpha3Code}>
            <CountryStyledLink name="country" to={{pathname: `/${name}`, state: {country: props.country}}}>
                <img src={flag} height="180"  width="300" alt={name}/>
                <h3 className="country-name">{name}</h3>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </CountryStyledLink>

        </CountryStyle>
    );
};

export default CountryMain;