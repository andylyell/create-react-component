import React from "react";
import InputField from "../UI/InputField/InputField";
import ChoiceToggle from "../UI/ChoiceToggle/ChoiceToggle";
import InfoMessage from "../UI/InfoMessage/InfoMessage";

const ControlPanel = props => {

    // console.log(props.inputValidation);
    let error = null;
    let info = null;
    let spacesCheck = !props.inputValidation.spacesPresent ? true : false;
    let disableCheck = !props.inputValue ? true : false;
    if(!disableCheck){
        error =  <InfoMessage infoType="error">This is an error</InfoMessage>
    }
    if(!spacesCheck){
        info = <InfoMessage infoType="info">Spaces are changed to camel case</InfoMessage>
    }

  return (
      <div className="control__panel-container">
        <div className="control__input-container">
          <div className="control__input-container--input">
          {info}
            <InputField
              inputChange={props.inputChange}
              inputValue={props.inputValue}
            />
          </div>
          <div className="control__input-container--radio">
            <ChoiceToggle
              radioOption={props.radioOption}
              radioOptionChange={props.radioOptionChange}
            />
          </div>
        </div>
        {error}
      </div>
  );
};

export default ControlPanel;
