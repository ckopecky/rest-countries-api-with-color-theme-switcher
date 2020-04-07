import React, { createContext, useEffect, useState } from 'react';
import { useAxiosGet } from "../hooks/useAxiosGet";

const url = 'https://restcountries.eu/rest/v2/all';

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    //cut state portion from traditional React App.js and bring it here to the ContextProvider
    //this is a globally accessible container very much like the store in Redux.
    const [ countries, setCountries ] = useState([]);
    const [ countryKey, setCountryKey ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ themeMode, setThemeMode ] = useState("light");

    let countryData = useAxiosGet(url);

    useEffect(() => {
        const getCountryCodes = (data) => {
            let countryCodes = {};
            data.forEach(country => {
                countryCodes[country.alpha3Code] = country.name;
            });
            return countryCodes;
        }
    
        const getAndSetCountryData = () => {
            setCountries(countryData);
            let cc = getCountryCodes(countryData);
            setCountryKey(cc);
            setLoading(false)
        }
        getAndSetCountryData();
    }, [countryData]);
    
    const context = { 
        countries, 
        countryKey, 
        loading,
        themeMode
    };

    const toggleTheme = () => {
        if(themeMode === "light") {
            setThemeMode("dark")
        } else {
            setThemeMode("light");
        }
    }

    //the value prop here is what makes our default context accessible to our entire application.
    return (
        <AppContext.Provider value={{context, toggle:{toggleTheme}}}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };