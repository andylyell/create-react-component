import React from 'react';

const Button = (props) => {

    let btn = null;
    let btnIcon = null;
    let btnClasses = null;

    if(props.colorMode){
        switch(props.btnType){
            case('primary'): btnClasses = ['button', 'button__primary'].join(' '); break;
            case('secondary'): btnClasses = ['button', 'button__secondary'].join(' '); break;
            case('tertiary'): btnClasses = ['button', 'button__tertiary'].join(' '); break;
            default: btnClasses = ['button', 'button__primary'].join(' '); break;
        }
    } else {
        switch(props.btnType){
            case('primary'): btnClasses = ['button', 'button__primary--dark'].join(' '); break;
            case('secondary'): btnClasses = ['button', 'button__secondary--dark'].join(' '); break;
            case('tertiary'): btnClasses = ['button', 'button__tertiary--dark'].join(' '); break;
            default: btnClasses = ['button', 'button__primary--dark'].join(' '); break;
        }
    }

    switch(props.icon){
        case('lightbulb'): btnIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M9 21c0 .6.5 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19a7 7 0 0 0-4 12.7V17c0 .6.5 1 1 1h6c.6 0 1-.5 1-1v-2.3A7 7 0 0 0 12 2zm2.9 11.1l-.9.6V16h-4v-2.3l-.8-.6a5 5 0 1 1 5.7 0z"/>
        </svg>; break;
        case('clipboard'): btnIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/>
        </svg>; break;
        case('reset'): btnIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 4V1L8 5l4 4V6a6 6 0 0 1 5.3 8.8l1.5 1.5A8 8 0 0 0 12 4zm0 14a6 6 0 0 1-5.3-8.8L5.2 7.7A8 8 0 0 0 12 20v3l4-4-4-4v3z"/>
        </svg>; break;
        default: btnIcon = null; break;
    }

    if(props.icon){
        btn = 
        <div onClick={props.clicked} className={btnClasses}>
                <div className='button__icon'>{btnIcon}</div>
                {/* <img className="button__icon" src={btnIcon} alt=""/> */}
                <p>{props.children}</p>
        </div>;
    } else {
        btn = <div onClick={props.clicked} className={btnClasses}><p>{props.children}</p></div>;
    }

    return (
        <>
            {btn}
        </>
    );
}

export default Button;