import React from 'react';
import CountryMain from "../CountryMain/CountryMain";
import { ListStyle } from './ListStyle';

const List = (props) => {
    const { currentPage, countries } = props;
    return (
        <ListStyle className="list-countries">
            {countries.map((country, index)=> {
                return <CountryMain {...props} key={index} currentPage={currentPage} country={country} />
            })}
        </ListStyle>
    );
};

export default List;