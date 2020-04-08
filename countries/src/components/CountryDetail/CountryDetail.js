import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { ButtonStyle } from './ButtonStyle';
import { CountryStyle, StyledImg, StyledSection, StyledSectionContainer, StyledH3Section } from './CountryStyle';

const Button = (props) => {
    return (
        <Link to={{pathname: props.name, state: {country: props.country}}}>
            <ButtonStyle key={props.country}>
                {props.name} 
            </ButtonStyle>
        </Link>
    )
}
const Country = (props) => {

    window.localStorage.setItem("country", JSON.stringify(props.history.location.state.country));
    
    const { flag, name, nativeName, languages, borders, topLevelDomain, population, region, subregion, capital, currencies } = JSON.parse(window.localStorage.getItem("country"));
    const c = useContext(AppContext);
    if(c) window.localStorage.setItem("countries", JSON.stringify(c.context.countries));

    const countries = JSON.parse(window.localStorage.getItem("countries"));




    // const getBorderCountryNames = (str) => {
    //     const { countryCodes } = props;
    //     if(countryCodes[str]) {
    //         return countryCodes[str];
    //     }
    //     return null;
    // }

    const getBorderCountryInfo = (str) => {
        const index = countries.filter(country=> {
            return str === country.alpha3Code;
        })
        return index[0];

    }
    return (
        <>
        {/* TODO: Back Button */}
            <CountryStyle id={props.alpha3Code}>
                <img src={flag} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <div className="styled-div">
                        <div className="section">
                            <p><span className="headings">Native Name:</span> {nativeName}</p> 
                            <p><span className="headings">Population:</span> {population}</p>
                            <p><span className="headings">Region:</span> {region}</p>
                            <p><span className="headings">Sub Region:</span> {subregion}</p>
                            <p><span className="headings">Capital:</span> {capital}</p>
                        </div>
                        <div className="section">
                            {topLevelDomain && (
                                <p>
                                    <span className="headings">Domain:</span> {topLevelDomain.map(domain => <span key={domain}>{domain}</span>
                                    )}
                                </p>
                            )}
                            {currencies && (
                                <p>
                                <span className="headings">Currency (Symbol):</span> {currencies.map(currency => {
                                    return (
                                        <span key={currency.name}>{`${currency.name} (${currency.symbol})`}</span>
                                    )
                                })}
                                </p>
                            )}
                            {languages && (
                                <p>
                                <span className="headings">Languages:</span> {languages.map(language => {
                                    return <span key={language.name}>{language.name}</span>
                                })}
                                </p>
                            )}
                            {/* {borders && (
                                <div>
                                    Border Countries: {borders.map(border => {
                                        let info = getBorderCountryInfo(border)
                                        return (
                                        <Button name={info.name} value={border} country={info}/>
                                        )
                                    })}
                                    <div>gekko</div>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </CountryStyle>
        </>
    )   
};

export default Country;