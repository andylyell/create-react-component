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
        sanitisedValue: '',
        inputValidation: {
            tooLong: false,
            spacesPresent: false,
            illegalCharactersPresent: ''
        }
    }

    camelize = (str) => {
        return str.replace(/\W+(.)/g, (match, chr) =>
        {
            return chr.toUpperCase();
        });
    }

    radioOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
          });
    }

    inputChangedHandler = (e) => {
        let inputString = e.target.value;
        
        this.sanitiseString(inputString);
        this.checkForLength(inputString);
        this.setState({
            inputValue: inputString
        });
    };

    sanitiseString = (inputString) => {
        if(inputString.includes(" ")){
            const changedString = this.transformString(inputString);
            this.setState(prevState =>({
                // ...prevState,
                sanitisedValue: changedString,
                inputValidation: {
                    ...prevState.inputValidation,
                    spacesPresent: true
                }
            }));

        } else {
            this.setState(prevState =>({
                sanitisedValue: inputString,
                inputValidation: {
                    ...prevState.inputValidation,
                    spacesPresent: false
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
            sanitisedValue: ''
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

    transformString = (inputString) => {
        return inputString.replace(/\W+(.)/g, (match, chr) => 
        {
               return chr.toUpperCase();
        });
    }

    render(){
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
                                inputValue={this.state.sanitisedValue} 
                                resetInput={this.resetInput}
                                radioOption={this.state.selectedOption}/>
                        </div>
                    </div>
                </div>
                
            </>  
        );
    };
};

export default Layout;

// chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=How%20to%20do%20Simple%20Form%20Validation%20in%20%23Reactjs%20%7C%20Learnetto&uri=https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs