import React, { Component } from 'react';
import List from "../List/List";
import "./Pagination.css"

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            countriesPerPage: 12
        }
    }
    handleClick = event => {
        if(this.state.currentPage >= 1 && this.state.currentPage <= Math.ceil(this.props.countries.length/this.state.countriesPerPage)) {
            this.setState({
                currentPage: Number(event.target.id)
            });
            this.props.history.push(`/`)
            }
    }


    render() {
        const { currentPage, countriesPerPage } = this.state;
        const { countries, countryCodes } = this.props;

        const lastIndex = currentPage * countriesPerPage;
        const firstIndex = lastIndex - countriesPerPage;

        const currentCountries = countries.slice(firstIndex, lastIndex);

        const renderCountries =
            <List {...this.props} countries={currentCountries} currentPage={this.state.currentPage} countryCodes={countryCodes}/>
        ;

        let pageNum = [];

        for(let i = 1; i <= Math.ceil(countries.length/countriesPerPage); i++) {
            pageNum = [...pageNum, i];
        }

        const renderPageNumbers = 
            pageNum.map(num => {
            if(num >= this.state.currentPage - 2 && num <= this.state.currentPage + 2) {
                return (
                    <button onClick={this.handleClick} name="currentPage" value={this.state.currentPage} id={num} key={num} className="page-item">
                            {num}
                        
                    </button>
                )
            } else {
                return <div></div>;
            }
        })


        return (
            <div>
                <div>{renderCountries}</div>
                <div className="pagination-container">
                    <div 
                        className={this.state.currentPage === 1 ? "hidden": "render-pages"} onClick={this.handleClick} 
                        id="1">
                            ≤≤
                    </div>
                    <div 
                        className={this.state.currentPage === 1 ? "hidden": "render-pages"}  onClick={this.handleClick} id={this.state.currentPage - 1}>≤</div>
                    <div 
                        className={this.state.currentPage ?"current-page": "render-pages"}>{renderPageNumbers}
                    </div>
                    <div
                        className={this.state.currentPage === Math.ceil(countries.length/countriesPerPage) ? "hidden": "render-pages"} 
                        onClick={this.handleClick} 
                        id={this.state.currentPage + 1}>
                            ≥
                    </div>
                    <div 
                        className={this.state.currentPage === Math.ceil(countries.length/countriesPerPage) ? "hidden": "render-pages"}
                        id={Math.ceil(countries.length/countriesPerPage)} onClick={this.handleClick}>
                            ≥≥
                    </div>
                </div>
            </div>
        );
    }
}

export default Pagination;