import React from 'react';
import Button from '../UI/Button/Button';
import InputField from '../UI/InputField/InputField';
import ChoiceToggle from '../UI/ChoiceToggle/ChoiceToggle';

function hasBeenClicked(e) {
    console.log(e.target);
    console.log('I have been clicked');
};

const ControlPanel = (props) => {

    return (
        <>
            <div className="control__button-container">
                <Button clicked={hasBeenClicked} btnType="secondary" icon="clipboard">Copy to clipboard</Button>
                <Button clicked={hasBeenClicked} btnType="quaternary" icon="reset">Reset</Button>
            </div>
            <div className="control__input-container">
                <div className="control__input-container--input">
                    <InputField/>
                </div>
                <div className="control__input-container--radio">
                    <ChoiceToggle/>
                </div>
            </div>
            
        </>
    );
}

export default ControlPanel;

