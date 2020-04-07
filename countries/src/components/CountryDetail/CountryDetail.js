import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Button = (props) => {
    return (
        <Link to={{pathname: props.name, state: {country: props.country}}}>
            <button key={props.country}>
                {props.name} 
            </button>
        </Link>
    )
}
const Country = (props) => {
    console.log(props);
    const { name, nativeName, flag, population, region, capital, topLevelDomain, subregion, borders, currencies, languages} = props.history.location.state.country;

    const { countries } = useContext(AppContext);


    const getBorderCountryNames = (str) => {
        const { countryCodes } = props;
        let name = "";
        if(countryCodes[str]) {
            name = countryCodes[str];
        } else {
            return;
        }
        return name;
    }

    const getBorderCountryInfo = (str) => {
        console.log(countries)
        console.log(str);
        const index = countries.filter(country => {
            return str === country.alpha3Code;
        })
        console.log(index);
        return index[0];

    }
    return (
        <div id={props.alpha3Code} className="outer-container">
            <img src={flag} width="300" alt={name}/>
            <section>
                <p><strong>{name}</strong></p>
                <p>Native Name: {nativeName}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Sub Region: {subregion}</p>
                <p>Capital: {capital}</p>
            </section>
            <section>
                <div>
                Top Level Domain: {topLevelDomain.map(domain => {
                    return <span key={domain}>{domain}</span>
                })}
                </div>
                <div>
                Currency: {currencies.map(currency => {
                    return (
                        <span key={currency}>{`name: ${currency.name} symbol: ${(currency.symbol)}`}</span>
                    )
                })}
                </div>
                <div>
                Languages: {languages.map(language => {
                    return <span key={language}>{language.name}</span>
                })}
                </div>
                <div>
                    Border Countries: {borders.map(border => {
                        let info = getBorderCountryInfo(border)
                        console.log("border country info", info)
                        return (
                        <Button name={info.name} country={info}/>
                        )
                    })}
                </div>
            </section>
                
        </div>
    )   
};

export default Country;