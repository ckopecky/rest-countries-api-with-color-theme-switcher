import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { NavStyle } from './NavStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from "@fortawesome/free-regular-svg-icons"


const Navigation = (props) => {
    const context = useContext(AppContext);
    console.log(context, "nav context")
    const handleClick = (event) => {
        context.toggle.toggleTheme();
    }
    return (

            <NavStyle>
                <Link to="/">
                    <h1>
                        {props.text}
                    </h1>
                </Link>
                    <div onClick={handleClick}>
                        <FontAwesomeIcon size="lg" icon={props.mode === "light" ? faSun: faMoon} />
                        <span>   {props.mode}</span>
                    </div>
            </NavStyle>

    );
}

export default withRouter(Navigation);