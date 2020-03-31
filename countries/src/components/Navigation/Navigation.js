import React from 'react';
import "./Navigation.css";

const Navigation = (props) => {
    const handleClick = (event) => {
        console.log("click is handled!");
    }
    return (
        <div>
            <nav>
                <header>
                    {props.text}
                </header>
                <div onClick={handleClick}>
                    {props.mode}
                </div>
            </nav>
        </div>
    );
}

export default Navigation