import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {

    const { name, nativeName, flag, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = props.history.location.state.country;

    const { countryCodes } = props;
    console.log("detail", props)

    const handleLinkClick = (event) => {
        let filtered = props.countries.filter(country => {
            return country.name === event.target.id
        });
        filtered = filtered[0];
        props.history.push(`/${filtered.name}`, {country: filtered});

    }
    return (
        <div>
            <div className="outer-container">
                <img src={flag} width="300" alt={name}/>
                <p><strong>{name}</strong></p>
                <p>Native Name: {nativeName}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subregion}</p>
                <p>Capital: {capital}</p>
            </div>

            <div>
                <p>Top Level Domain: 
                    {topLevelDomain.map(domain => {
                    return (
                        <span key={domain}>  {domain}</span>
                    )
                    })}
                </p>
                <p>Currency: {currencies.map(currency => {
                    return (
                        <span key={currency}>{currency.name}</span>
                    )
                })}
                
                </p>
                <p>Languages: {languages.map((language, index) => {
                    if(index !== languages.length - 1) {
                        return (
                            <span key={language.name}>{language.name}, </span>
                        ) 
                    } else {
                        return (
                            <span key={language.name}>{language.name} </span>
                        ) 
                    }
                
                })}
                
                </p>
                {borders.length ? (
                    <div>
                    <div>
                        <p>Border Countries:</p>
                        {borders.map((border, index) => {
                            //lookup

                            if(borders.includes(border) && index < 3) {
                                return (
                                    <button id={countryCodes[border]} key={countryCodes[border]} onClick={handleLinkClick}>{countryCodes[border]}</button>
                                )
                            } else {
                                return;
                            }
                        })}
                    </div>
                </div>
                ) :
                <div></div>
                }
                

            </div>
        </div>
    );
};

export default Country;