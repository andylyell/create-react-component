import React from 'react';
import { addDarkClass, removeDarkClass } from '../../../helpers/helpers';

const ChoiceToggle = (props) => {

    let conStyle = 'container';
    let checkStyle = 'checkmark';
    if(props.colorMode){
        conStyle = removeDarkClass(conStyle);
        checkStyle = removeDarkClass(checkStyle);       
    } else {
        conStyle = addDarkClass(conStyle);
        checkStyle = addDarkClass(checkStyle);
    }

    return (
        <div className="choice-toggle__container">
            <label className={conStyle}> 
                <input 
                    type="radio" 
                    name="component-type" 
                    value="function-option" 
                    checked={props.radioOption === 'function-option'}
                    onChange={props.radioOptionChange}/>
                <span className="label">Function</span>
                <span className={checkStyle}></span>
            </label>
            <label className={conStyle}> 
                <input 
                    type="radio" 
                    value="class-option" 
                    name="radio" 
                    checked={props.radioOption === 'class-option'}
                    onChange={props.radioOptionChange}/>
                <span className="label">Class</span>
                <span className={checkStyle}></span>
            </label>
        </div>
        );
};

export default ChoiceToggle;