import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Button } from './Button';
import { CountryStyle, StyledBorderButtons, StyledImg } from './CountryStyle';
import { ButtonStyle } from './ButtonStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Country = (props) => {
    console.log(props.history);
    window.localStorage.setItem("country", JSON.stringify(props.history.location.state.country));
    
    const { flag, name, nativeName, languages, borders, topLevelDomain, population, region, subregion, capital, currencies } = JSON.parse(window.localStorage.getItem("country"));
    const c = useContext(AppContext);
    if(c) window.localStorage.setItem("countries", JSON.stringify(c.context.countries));

    const countries = JSON.parse(window.localStorage.getItem("countries"))
    console.log(flag);

    // const getBorderCountryNames = (str) => {
    //     const { countryCodes } = props;
    //     if(countryCodes[str]) {
    //         return countryCodes[str];
    //     }
    //     return null;
    // }

    const getBorderCountryInfo = (str) => {
        const matches = JSON.parse(window.localStorage.getItem('countries')).filter(country => {
            return country.alpha3Code === str;
        });

        if(matches.length > 1) {
            throw new Error("must not have more than one match");
        } else {
            return matches[0];
        }
        

    }

    const handleBack = () => {
        props.history.goBack();
    }

    return (
        <>
        <ButtonStyle onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>   Back</span>
        </ButtonStyle>
            <CountryStyle id={props.alpha3Code}>
                <StyledImg url={flag}/>
                <div className="h3-div">
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
                        </div>
                    </div>
                        <StyledBorderButtons>
                            {borders && (
                                <div>
                                    <span className="headings">Border Countries: </span> {borders.map((border, index) => {
                                        let info = getBorderCountryInfo(border)
                                        if(index < 3) {
                                            return (
                                                <Button value={border} country={info}/>
                                            )
                                        }
                                        
                                    })}
                                </div>
                            )}
                        </StyledBorderButtons>
                </div>
            </CountryStyle>
        </>
    )   
};

export default Country;