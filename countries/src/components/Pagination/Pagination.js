import React, { useState, useContext } from 'react';
import List from "../List/List";
import "./Pagination.css"
import { AppContext } from '../../context/AppContext';


const Pagination = (props) => {
    const c = useContext(AppContext);
    console.log(c);
    const countries = c.context.countries
    
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ countriesPerPage, setCountriesPerPage ] = useState(12);

    const handleClick = event => {
        if(currentPage >= 1 && currentPage <= Math.ceil(countries.length/countriesPerPage)) {
            setCurrentPage(Number(event.target.id));
        }
        props.history.push("/");
    }

    const lastIndex = currentPage * countriesPerPage;
    const firstIndex = lastIndex - countriesPerPage;
    const currentCountries = countries.slice(firstIndex, lastIndex);
    
    const renderCountries =
    <List {...props} countries={currentCountries} currentPage={currentPage}/>

    let pageNum = [];
    for(let i = 1; i <= Math.ceil(countries.length/countriesPerPage); i++) {
        pageNum = [...pageNum, i];
    }

    const isActive = () => {
        if(currentPage) {
            return true;
        } else {
            return false;
        }
    }

    const renderPageNumbers = 
            pageNum.map(num => {
            if(num >= currentPage - 2 && num <= currentPage + 2) {
                return (
                    <button onClick={handleClick} name="currentPage" value={currentPage} id={num} key={num} className={num === currentPage? "page-item active": "page-item"}>
                            {num}
                    </button>
                )
            } else {
                return <div></div>;
            }
        });

        return (
            <div>
                <div>{renderCountries}</div>
                <div className="pagination-container">
                    <div 
                        className={currentPage === 1 ? "hidden": "render-pages"} onClick={handleClick} 
                        id="1">
                            ≤≤
                    </div>
                    <div 
                        className={currentPage === 1 ? "hidden": "render-pages"}  onClick={handleClick} id={currentPage - 1}>≤</div>
                    <div 
                        className={currentPage ?"current-page": "render-pages"}>{renderPageNumbers}
                    </div>
                    <div
                        className={currentPage === Math.ceil(countries.length/countriesPerPage) ? "hidden": "render-pages"} 
                        onClick={handleClick} 
                        id={currentPage + 1}>
                            ≥
                    </div>
                    <div 
                        className={currentPage === Math.ceil(countries.length/countriesPerPage) ? "hidden": "render-pages"}
                        id={Math.ceil(countries.length/countriesPerPage)} onClick={handleClick}>
                            ≥≥
                    </div>
                </div>
            </div>
        );
    return <div>hello</div>
}

export default Pagination;