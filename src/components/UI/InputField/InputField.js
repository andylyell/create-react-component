import React from 'react';

const InputField = (props) => {
    return(
        <form className="input-field" action="/action_page.php">
            <label className="input-field__label" htmlFor="name">Component Name</label>
            <input className="input-field__input" type="text" name="gender" id="name" placeholder="E.g. Header"/>
        </form>
        );
};

export default InputField;