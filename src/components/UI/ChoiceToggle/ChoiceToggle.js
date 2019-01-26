import React from 'react';

const ChoiceToggle = (props) => {

    console.log(props.radioOption);

    return (
        <div className="choice-toggle__container">
            <label className="container"> 
                <input 
                    type="radio" 
                    name="component-type" 
                    value="function-option" 
                    checked={props.radioOption === 'function-option'}
                    onChange={props.radioOptionChange}/>
                <span className="label">Function</span>
                <span className="checkmark"></span>
            </label>
            <label className="container"> 
                <input 
                    type="radio" 
                    value="class-option" 
                    name="radio" 
                    checked={props.radioOption === 'class-option'}
                    onChange={props.radioOptionChange}/>
                <span className="label">Class</span>
                <span className="checkmark"></span>
            </label>
        </div>
        );
};

export default ChoiceToggle;

// <form className="choice-toggle">
        //     <input className="choice-toggle__input" type="radio" name="type" value="function" defaultChecked/> <span className="choice-toggle__input--text">Function</span>
        //     <input className="choice-toggle__input" type="radio" name="type" value="class"/> <span className="choice-toggle__input--text">Class</span>
        // </form>);