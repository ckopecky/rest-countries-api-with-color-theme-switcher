import React, { Component } from 'react';
import List from "../List/List";

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
        this.props.history.push(`/`)
    }


    render() {
        console.log(this.props.match.params);
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
                    <button onClick={this.handleClick} id={num} key={num} className="page-item">
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
                <div onClick={this.handleClick} id="1">First</div>
                <div onClick={this.handleClick} id={this.state.currentPage - 1}>Prev</div>
                <div>{renderPageNumbers}</div>
                <div onClick={this.handleClick} id={this.state.currentPage + 1}>Next</div>
                <div id={Math.ceil(countries.length/countriesPerPage)} onClick={this.handleClick}>Last</div>
{/* TODO: Handle edge cases where < 1 and > 26 */}
            </div>
        );
    }
}

export default Pagination;