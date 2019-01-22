import React from 'react';

const ChoiceToggle = (props) => {
    return (
        <form className="choice-toggle">
            <input className="choice-toggle__input" type="radio" name="type" value="function" defaultChecked/> <span className="choice-toggle__input--text">Function</span>
            <input className="choice-toggle__input" type="radio" name="type" value="class"/> <span className="choice-toggle__input--text">Class</span>
        </form>);
};

export default ChoiceToggle;