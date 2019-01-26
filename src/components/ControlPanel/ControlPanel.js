import React from 'react';
import InputField from '../UI/InputField/InputField';
import ChoiceToggle from '../UI/ChoiceToggle/ChoiceToggle';


const ControlPanel = (props) => {

    return (
        <>
            {/* <div className="control__button-container">
                <Button clicked={hasBeenClicked} btnType="secondary" icon="clipboard" colorMode={props.colorMode}>Copy to clipboard</Button>
                <Button clicked={hasBeenClicked} btnType="tertiary" icon="reset" colorMode={props.colorMode}>Reset</Button>
            </div> */}
            <div className="control__input-container">
                <div className="control__input-container--input">
                    <InputField 
                        inputChange={props.inputChange} 
                        inputValue={props.inputValue}/>
                </div>
                <div className="control__input-container--radio">
                    <ChoiceToggle 
                        radioOption={props.radioOption}
                        radioOptionChange={props.radioOptionChange}/>
                </div>
            </div>
            
        </>
    );
}

export default ControlPanel;

