import React from 'react';
import Country from "./Country";

const List = (props) => {
    console.log(props);
    const { countries, countryCodes } = props;
    return (
        <div className="list-countries">
            {countries.map((country, index)=> {
            return <Country key={index} country={country} countryCodes={countryCodes}/>
      })}
    </div>
    );
};

export default List;