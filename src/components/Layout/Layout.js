import React from 'react';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import ControlPanel from '../ControlPanel/ControlPanel';
import OutputCodeBlock from '../OutputCodeBlock/OutputCodeBlock';
import { addDarkClass, removeDarkClass } from '../../helpers/helpers';

class Layout extends React.Component {

    state = {
        colorMode: true,
        selectedOption: 'function-option',
        inputValue: '',
        inputValidation: {
            tooLong: false,
            illegalCharactersPresent: false,
            illegalCharacters: []
        }
    }

    radioOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
          });
    }

    inputChangedHandler = (e) => {
        let inputString = e.target.value;
        if(inputString.length === 0){
            this.setState(prevState =>({
                inputValidation: {
                    ...prevState.inputValidation,
                    illegalCharacters: []
                }
            }))
        }
        this.sanitiseString(inputString);
        this.checkForLength(inputString);
        this.setState({
            inputValue: inputString
        });
    };

    sanitiseString = (inputString) => {
        const letters = /^[0-9a-zA-Z]+$/;
        const numberStart = /^\d/;
        let characterList = [];
        if((!inputString.match(letters) && inputString.length >= 1) || (inputString.match(numberStart) && inputString.length >= 1)){
            for (let i = 0; i < inputString.length; i++){
                if(!inputString[i].match(letters)){
                    characterList.push(inputString[i]);
                }
            }
            this.setState(prevState =>({
                inputValidation: {
                    ...prevState.inputValidation,
                    illegalCharactersPresent: true,
                    illegalCharacters: characterList
                }
            }));

        } else {
            this.setState(prevState =>({
                inputValidation: {
                    ...prevState.inputValidation,
                    illegalCharactersPresent: false
                }
            }));
        }
    }

    checkForLength = (string) => {
        if(string.length >= 30){
            this.setState(prevState =>({
                inputValidation: {
                    ...prevState.inputValidation,
                    tooLong: true
                }
            }));
        } else {

            this.setState(prevState =>({
                inputValidation: {
                    ...prevState.inputValidation,
                    tooLong: false
                }
            }));
        }
    }

    resetInput = () => {
        this.setState({
            inputValue: '',
            inputValidation: {
                tooLong: false,
                illegalCharactersPresent: false,
                illegalCharacters: []
            }
        });
    }


    colorSwitch = () => {
        this.setState((prevState) => {
            return {colorMode: !prevState.colorMode}
          });
    }

    typeSwitch = () => {
        this.setState((prevState) => {
            return {componentIsClass: !prevState.componentIsClass}
        });
    }

    render(){
        // console.log(this.state.inputValidation);
        let layoutControlStyle = "layout__control";
        if(this.state.colorMode){
            layoutControlStyle = removeDarkClass(layoutControlStyle);
        } else {
            layoutControlStyle = addDarkClass(layoutControlStyle);
        }


        return (
            <>
                <div className="layout">
                    <Header colorSwitch={this.colorSwitch} colorMode={this.state.colorMode}/>
                    <InfoBlock colorMode={this.state.colorMode}/>
                    <div className={layoutControlStyle}>
                        <div className="layout__control--container">
                            <ControlPanel 
                                colorMode={this.state.colorMode} 
                                inputChange={this.inputChangedHandler} 
                                inputValue={this.state.inputValue} 
                                radioOption={this.state.selectedOption}
                                radioOptionChange={this.radioOptionChange}
                                inputValidation={this.state.inputValidation}/>
                            <OutputCodeBlock 
                                colorMode={this.state.colorMode} 
                                inputValue={this.state.inputValue} 
                                resetInput={this.resetInput}
                                radioOption={this.state.selectedOption}
                                inputValidation={this.state.inputValidation}/>
                        </div>
                    </div>
                </div>
                
            </>  
        );
    };
};

export default Layout;

// chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=How%20to%20do%20Simple%20Form%20Validation%20in%20%23Reactjs%20%7C%20Learnetto&uri=https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs