import React from 'react';

const InputField = (props) => {

    let checked = null;
    if(props.inputValue){
        checked = <svg className="input-field__check" xmlns="http://www.w3.org/2000/svg" fill="#00aa5e" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    }

    return(
        <div className="input-field">
            <label className="input-field__label" htmlFor="name">Component Name</label>
            <input maxLength="30" className="input-field__input" type="text" name="gender" id="name" placeholder="E.g. Header" onChange={props.inputChange} value={props.inputValue}/>
            {checked}
        </div>
        );
};

export default InputField;