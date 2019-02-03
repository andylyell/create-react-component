import React from 'react';
import Button from '../UI/Button/Button';
import { addDarkClass, removeDarkClass } from '../../helpers/helpers';

const Header = (props) => {

    let navStyle = "nav";
    let navTitleStyle = "nav__title";
    let buttonText = null;

    if(props.colorMode){
        navStyle = removeDarkClass(navStyle);
        navTitleStyle = removeDarkClass(navTitleStyle);
        buttonText = "Dark Mode"
    } else {
        navStyle = addDarkClass(navStyle);
        navTitleStyle = addDarkClass(navTitleStyle);
        buttonText = "Light Mode"
    }  

    return (
        <nav className={navStyle}>
            <div className={navTitleStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M12 18L.6 9 12 0l11.4 9L12 18z"/>
                        <path d="M12 21l-9.5-7.5L.6 15 12 24l11.4-9-2-1.5L12 21z"/>
                    </svg>
                    <p>Create react component</p>
            </div>
            <Button clicked={props.colorSwitch} icon="lightbulb" btnType="primary" colorMode={props.colorMode}>{buttonText}</Button>
        </nav>
    );
};

export default Header;