import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, nativeName, flag, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = props.country;

    const { countryCodes } = props;
    
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
                        <span>{domain}</span>
                    )
                    })}
                </p>
                <p>Currency: {currencies.map(currency => {
                    return (
                        <span>{currency.name}</span>
                    )
                })}
                
                </p>
                <p>Languages: {languages.map((language, index) => {
                    if(index !== languages.length - 1) {
                        return (
                            <span>{language.name}, </span>
                        ) 
                    } else {
                        return (
                            <span>{language.name} </span>
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
                                    <button>
                                        <Link>{countryCodes[border]}</Link>
                                    </button>
                                )
                            } else {
                                return (
                                    <span></span>
                                )
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