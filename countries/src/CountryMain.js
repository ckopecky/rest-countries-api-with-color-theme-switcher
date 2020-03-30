import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CountryMain = (props) => {

    const { name, flag, population, region, capital } = props.country;

    const { countryCodes, country, currentPage } = props;
    return (
        <div id={props.alpha3Code} className="outer-container">
            <Link name="country" to={{pathname: `/${name}`, state: {country: props.country}}}>
                <img src={flag} width="300" alt={name}/>
                <p><strong>{name}</strong></p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </Link>

        </div>
    );
};

export default CountryMain;