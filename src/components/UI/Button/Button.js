import React from 'react';
import Lightbulb from '../../../assets/icons/lightbulb.svg';
import Clipboard from '../../../assets/icons/clipboard.svg';
import Reset from '../../../assets/icons/reset.svg';

const Button = (props) => {

    let btn = null;
    let btnIcon = null;
    let btnClasses = null;

    switch(props.btnType){
        case('primary'): btnClasses = ['button', 'button__primary'].join(' '); break;
        case('secondary'): btnClasses = ['button', 'button__secondary'].join(' '); break;
        case('tertiary'): btnClasses = ['button', 'button__tertiary'].join(' '); break;
        default: btnClasses = ['button', 'button__primary'].join(' '); break;
    }

    switch(props.icon){
        case('lightbulb'): btnIcon = Lightbulb; break;
        case('clipboard'): btnIcon = Clipboard; break;
        case('reset'): btnIcon = Reset; break;
        default: btnIcon = null; break;
    }

    if(props.icon){
        btn = 
        <div className={btnClasses}>
                <img className="button__icon" src={btnIcon} alt=""/>
                <p>{props.children}</p>
        </div>;
    } else {
        btn = <div className={btnClasses}><p>{props.children}</p></div>;
    }

    return (
        <>
            {btn}
        </>
    );
}

export default Button;