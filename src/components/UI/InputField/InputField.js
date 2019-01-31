import React from 'react';
import InfoMessage from '../InfoMessage/InfoMessage';

const InputField = (props) => {

    return(
        <div className="input-field">
            <InfoMessage infoType="info">This is user information</InfoMessage>
            <label className="input-field__label" htmlFor="name">Component Name</label>
            <input className="input-field__input" type="text" name="gender" id="name" placeholder="E.g. Header" onChange={props.inputChange} value={props.inputValue}/>
        </div>
        );
};

export default InputField;