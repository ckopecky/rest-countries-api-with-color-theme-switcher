import useFetch from "./useAxiosGet";
import { useState, useEffect } from "react";

const useCountryCodes = (url) => {
    const data = useFetch(url);
    const [ codes, setCodes ] = useState({});
    

    useEffect(() => {
        const getCountryCodes = async () => {
            let countryCodes = {};
            await data.forEach(country => {
                countryCodes[country.alpha3Code] = country.name;
            });
            setCodes(countryCodes);   
        }
        getCountryCodes();
    }, [url, codes, data])
    
    return codes;    

    }

export default useCountryCodes;