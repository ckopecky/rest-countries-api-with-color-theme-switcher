import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from './ButtonStyle';



const Button = (props) => {
    console.log(props, "button props");
    return (
        <Link to={{pathname: props.country.name, state: {country: props.country}}}>
            <ButtonStyle key={props.country}>
                {props.country.name} 
            </ButtonStyle>
        </Link>
    )
}

export { Button };