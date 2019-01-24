import React from 'react';
import Button from '../UI/Button/Button';

// function hasBeenClicked(e) {
//     console.log(e.target);
//     console.log('I have been clicked');
// };

const Header = (props) => {


    const styleName = "nav";
    let navStyle = null;
    let navTitleStyle = null;
    let buttonText = null;

    if(props.colorMode){
        navStyle = styleName;
        navTitleStyle = styleName + "__title";
        buttonText = "Dark Mode"
    } else {
        navStyle = styleName + "--dark";
        navTitleStyle = styleName + "__title--dark";
        buttonText = "Light Mode"
    }  

    return (
        <nav className={navStyle}>
            <div className={navTitleStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8a5 5 0 0 0-5-5h-5v2h5a3 3 0 0 1 3 3v5h2V8z"/>
                    </svg>
                    <p>Create react component</p>
            </div>
            <Button clicked={props.colorSwitch} icon="lightbulb" btnType="primary" colorMode={props.colorMode}>{buttonText}</Button>
        </nav>
    );
};

export default Header;