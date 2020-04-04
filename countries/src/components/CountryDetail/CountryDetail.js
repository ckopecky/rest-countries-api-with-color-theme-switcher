import React from 'react';

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
                        return (
                        <button>{getBorderCountryNames(border)}</button>
                        )
                    })}
                </div>
            </section>
                
        </div>
    )   
};

export default Country;