import React from 'react';

const InputField = (props) => {

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    // }

    return(
        <div className="input-field">
            <label className="input-field__label" htmlFor="name">Component Name</label>
            <input className="input-field__input" type="text" name="gender" id="name" placeholder="E.g. Header" onChange={props.inputChange} value={props.inputValue}/>
        </div>
        );
};

export default InputField;