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
            spacesPresent: '',
            illegalCharactersPresent: ''
        }
    }

    radioOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
          });
    }

    inputChangedHandler = (e) => {
        const inputString = e.target.value;
        //String handling could go here
        // console.log(e.target.value);
        this.sanitiseString(inputString);
        this.checkForLength(inputString);

        this.setState({
            inputValue: inputString
        });
    };

    sanitiseString = (inputString) => {
        if(inputString.includes(" ")){
            console.log('spaces present');
        }
    }

    checkForLength = (string) => {
        if(string.length > 32){
            // console.log('toolong');
            this.setState({
                inputValidation: {
                    tooLong: true
                }
            });
        } else {
            this.setState({
                inputValidation: {
                    tooLong: false
                }
            });
        }
    }

    resetInput = () => {
        this.setState({
            inputValue: ''
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
                                radioOptionChange={this.radioOptionChange}/>
                            <OutputCodeBlock 
                                colorMode={this.state.colorMode} 
                                inputValue={this.state.inputValue} 
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