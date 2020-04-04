import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={{pathname: props.name, state: {country: props.country}}}>
            <button>
                {props.name}
            </button>
        </Link>
    )
}
const Country = (props) => {
    console.log(props);
    const { name, nativeName, flag, population, region, capital, topLevelDomain, subregion, borders, currencies, languages} = props.history.location.state.country;

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
        const { countries } = props;
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
                    return <span>{domain}</span>
                })}
                </div>
                <div>
                Currency: {currencies.map(currency => {
                    return (
                        <span>{`name: ${currency.name} symbol: ${(currency.symbol)}`}</span>
                    )
                })}
                </div>
                <div>
                Languages: {languages.map(language => {
                    return <span>{language.name}</span>
                })}
                </div>
                <div>
                    Border Countries: {borders.map(border => {
                        let info = getBorderCountryInfo(border)
                        console.log("border country info", info)
                        const name = getBorderCountryNames(border);
                        console.log(name, "name");
                        return (
                        <Button name={getBorderCountryNames(border)} country={info}/>
                        )
                    })}
                </div>
            </section>
                
        </div>
    )   
};

export default Country;