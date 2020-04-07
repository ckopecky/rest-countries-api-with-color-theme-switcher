import React, { useContext } from 'react';
import CountryMain from "../CountryMain/CountryMain";
import "./List.css";
import { AppContext } from '../../context/AppContext';

const List = (props) => {
    const { currentPage, countries } = props;
    return (
        <div className="list-countries">
            {countries.map((country, index)=> {
            return <CountryMain {...props} key={index} currentPage={currentPage} country={country} />
    })}
    </div>
    );
};

export default List;