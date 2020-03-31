import React from 'react';
import CountryMain from "../CountryMain/CountryMain";
import "./List.css";

const List = (props) => {
    console.log(props)
    const { countries, countryCodes, currentPage } = props;
    return (
        <div className="list-countries">
            {countries.map((country, index)=> {
                console.log(country);
            return <CountryMain {...props} key={index} currentPage={currentPage} country={country} countryCodes={countryCodes}/>
      })}
    </div>
    );
};

export default List;