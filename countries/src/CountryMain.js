import React from 'react';
import { Link } from 'react-router-dom';

const CountryMain = (props) => {
    const { name, flag, population, region, capital } = props.country;

    const { countryCodes, country } = props;
    return (
        <Link to={{path: `/${name}`, state: {country: country, countryCodes: countryCodes}}}>
            <div className="outer-container">
                <img src={flag} width="300" alt={name}/>
                <p><strong>{name}</strong></p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </Link>
    );
};

export default CountryMain;