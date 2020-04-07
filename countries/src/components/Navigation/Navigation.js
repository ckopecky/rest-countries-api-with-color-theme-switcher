import React, { useContext } from 'react';
import "./Navigation.css";
import { AppContext } from '../../context/AppContext';

const Navigation = (props) => {
    const context = useContext(AppContext);
    console.log(context, "nav context")
    const handleClick = (event) => {
        context.toggle.toggleTheme();
    }
    return (
        <div>
            <nav>
                <h1>
                    {props.text}
                </h1>
                <div onClick={handleClick}>
                    {props.mode}
                </div>
            </nav>
        </div>
    );
}

export default Navigation