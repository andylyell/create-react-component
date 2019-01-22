import React from 'react';
import Button from '../UI/Button/Button';
import InputField from '../UI/InputField/InputField';

function hasBeenClicked(e) {
    console.log(e.target);
    console.log('I have been clicked');
};

const ControlPanel = (props) => {

    return (
        <>
            <div className="control__button-container">
                <div className="control__button-block">
                    <Button clicked={hasBeenClicked} btnType="secondary">Simple</Button>
                    <Button clicked={hasBeenClicked} btnType="quaternary">Advanced</Button>
                </div>
                <Button clicked={hasBeenClicked} icon="reset" btnType="tertiary">Reset component</Button>
            </div>
            <InputField/>
        </>
    );
}

export default ControlPanel;

