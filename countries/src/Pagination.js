import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from "./List";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            countriesPerPage: 10
        }
    }
    handleClick = event => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render() {
        const { currentPage, countriesPerPage } = this.state;
        const { countries, countryCodes } = this.props;
        console.log(countries);

        const lastIndex = currentPage * countriesPerPage;
        const firstIndex = lastIndex - countriesPerPage;

        const currentCountries = countries.slice(firstIndex, lastIndex);

        const renderCountries =
            <List countries={currentCountries} countryCodes={countryCodes}/>
        ;

        let pageNum = [];

        for(let i = 1; i <= Math.ceil(countries.length/countriesPerPage); i++) {
            pageNum = [...pageNum, i];
        }

        const renderPageNumbers = pageNum.map(num => {
            
            if(num >= this.state.currentPage - 2 && num <= this.state.currentPage - 2) {
                return (
                    <li className="page-item">
                        <Link className="page-link" id={num} key={num}>
                            {num}
                        </Link>
                    </li>
                )
            }
        })


        return (
            <div>
                <div>{renderCountries}</div>
                <div>
                    <Link>First</Link>
                    <Link>Prev</Link>
                    {renderPageNumbers}
                    <Link>Next</Link>
                    <Link>Last</Link>
                </div>   
            </div>
        );
    }
}

export default Pagination;