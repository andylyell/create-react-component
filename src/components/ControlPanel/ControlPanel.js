import React from "react";
import InputField from "../UI/InputField/InputField";
import ChoiceToggle from "../UI/ChoiceToggle/ChoiceToggle";
import InfoMessage from "../UI/InfoMessage/InfoMessage";
import { addDarkClass, removeDarkClass } from "../../helpers/helpers";

const ControlPanel = props => {

    let controlStyleContainer = 'control__input-container';
    if(props.colorMode){
      controlStyleContainer = removeDarkClass(controlStyleContainer);
    } else {
      controlStyleContainer = addDarkClass(controlStyleContainer);
    }



    let error = null;
    let info = null;
    let lengthCheck = !props.inputValidation.tooLong ? true : false;
    let illegalCharacterCheck = !props.inputValidation.illegalCharactersPresent ? true : false;
    let numberCheck = null;
    let messageCharacters = [];
    let illegalCharacterMessage = null;
    if (!isNaN(props.inputValue[0]) && props.inputValue[0] !== " "){
      numberCheck = 'First character cannot be a number';
    }
    if(!illegalCharacterCheck){
        let characters = props.inputValidation.illegalCharacters;
        for(let i = 0; i < characters.length; i++){
          if(messageCharacters.includes(characters[i])){
          } 
          else {
            if(characters[i] === ' ' && !messageCharacters.includes('white space')){
              characters.splice(i, 1, 'white space')
              console.log(characters[i]);
            }
            messageCharacters.push(characters[i]);
            illegalCharacterMessage = 'Illegal characters used: ' + messageCharacters.join(" ") + '  ';
          }
        }
        error =  <InfoMessage infoType="error">{illegalCharacterMessage}{numberCheck}</InfoMessage>
    }
    if(!lengthCheck){
        info = <InfoMessage infoType="info">Reached 30 character limit</InfoMessage>
    }

  return (
      <div className="control__panel-container">
        <div className={controlStyleContainer}>
          <div className="control__input-container--input">
          {info}
            <InputField
              colorMode={props.colorMode}
              inputChange={props.inputChange}
              inputValue={props.inputValue}
              inputValidation={props.inputValidation}
            />
          </div>
          <div className="control__input-container--radio">
            <ChoiceToggle
              colorMode={props.colorMode}
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
