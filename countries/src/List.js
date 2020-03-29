import React from 'react';
import CountryMain from "./CountryMain";

const List = (props) => {
    console.log(props);
    const { countries, countryCodes } = props;
    return (
        <div className="list-countries">
            {countries.map((country, index)=> {
            return <CountryMain key={index} country={country} countryCodes={countryCodes}/>
      })}
    </div>
    );
};

export default List;