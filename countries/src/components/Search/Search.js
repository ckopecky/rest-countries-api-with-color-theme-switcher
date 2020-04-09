import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { SearchStyle } from './SearchStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from '../../context/AppContext';

export const Search = (props) => {

    const data = useContext(AppContext);
    
    const handleChange = (e) => {
        data.change(e.target.value);
    }
    const handleSubmit = (e) => {
        data.submit(e)

    }
    
    return (
        <SearchStyle onSubmit={handleSubmit}>
            <input onChange = {handleChange} type="text" name="userInput" value={data.context.userInput} placeholder="Search for a Country..."/>
            <div><FontAwesomeIcon icon={faSearch}/></div>
        </SearchStyle>
    );
};

export default withRouter(Search);