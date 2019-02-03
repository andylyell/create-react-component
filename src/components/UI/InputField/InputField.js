import React from 'react';

const InputField = (props) => {

    let checked = null;
    let inputStyle = 'input-field__input';
    if(props.inputValidation.illegalCharactersPresent){
        inputStyle = 'input-field__input--error';
        checked = <svg className="input-field__check" xmlns="http://www.w3.org/2000/svg" fill="#c50031" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    } else if(props.inputValue.length >= 1) {
        checked = <svg className="input-field__check" xmlns="http://www.w3.org/2000/svg" fill="#00aa5e" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    }

    return(
        <div className="input-field">
            <label className="input-field__label" htmlFor="name">Component Name</label>
            <input maxLength="30" className={inputStyle} type="text" name="gender" id="name" placeholder="E.g. Header" onChange={props.inputChange} value={props.inputValue}/>
            {checked}
        </div>
        );
};

export default InputField;