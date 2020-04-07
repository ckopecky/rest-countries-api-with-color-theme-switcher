import React from 'react';
import { Link } from 'react-router-dom';
import "./CountryMain.css";

const CountryMain = (props) => {
    console.log("country main", props.country);
    const { name, flag, population, region, capital } = props.country;

    return (
        <div id={props.alpha3Code} className="outer-container">
            <Link name="country" to={{pathname: `/${name}`, state: {country: props.country}}}>
                <img src={flag} height="180"  width="300" alt={name}/>
                <p><strong>{name}</strong></p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </Link>

        </div>
    );
};

export default CountryMain;