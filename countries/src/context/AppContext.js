import React, { createContext, useEffect, useState } from 'react';
import { useAxiosGet } from "../hooks/useAxiosGet";


const AppContext = createContext();
const baseURL = 'https://restcountries.eu/rest/v2/'
const AppContextProvider = ({children}) => {
    //cut state portion from traditional React App.js and bring it here to the ContextProvider
    //this is a globally accessible container very much like the store in Redux.
    const [ countries, setCountries ] = useState([]);
    const [ originalCountries, setOriginalCountries ] = useState([]);
    const [ countryKey, setCountryKey ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ themeMode, setThemeMode ] = useState("light");
    const [ userInput, setUserInput ] = useState("");
    const [ url, setUrl ] = useState(baseURL);
    const [ searching, setSearching ] = useState(false);

    let countryData = useAxiosGet(url);
    let originalData = useAxiosGet(baseURL);

    const getCountryCodes = (data) => {
        let countryCodes = {};
        data.forEach(country => {
            countryCodes[country.alpha3Code] = country.name;
        });
        return countryCodes;
    }

    useEffect(() => {
        const getAndSetCountryData = () => {
            let cc = getCountryCodes(originalData);
            setOriginalCountries(originalData);
            setCountryKey(cc);
            if(!searching) {
                setCountries(originalData);
                setLoading(false)
            }
            else {
                console.log(countryData);
                setCountries(countryData);
            }
        }
        getAndSetCountryData();
    }, [countryData, originalData, searching]);
    
    const context = { 
        countries, 
        originalCountries,
        countryKey, 
        loading,
        searching,
        themeMode,
        userInput,
        url
    };

    const toggleTheme = () => {
        if(themeMode === "light") {
            setThemeMode("dark")
        } else {
            setThemeMode("light");
        }
    }

    const change = (target) => {
        setUserInput(target)
    }
    const submit = async (e) => {
        e.preventDefault();
        await setUrl(`${baseURL}name/${userInput}`);
        console.log(userInput, url);
        setSearching(true);
    }

    //the value prop here is what makes our default context accessible to our entire application.
    return (
        <AppContext.Provider value={{context, toggle:{toggleTheme}, change, submit}}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };