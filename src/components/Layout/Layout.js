import React from 'react';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import ControlPanel from '../ControlPanel/ControlPanel';
import OutputCodeBlock from '../OutputCodeBlock/OutputCodeBlock';
import { addDarkClass, removeDarkClass } from '../../helpers/helpers';

class Layout extends React.Component {

    state = {
        colorMode: true,
        componentIsClass: true,
        inputValue: ''
    }

    componentDidMount(){
        // console.log('[ComponentDidMount] ' + this.state.colorMode);
    }

    componentDidUpdate(){
        // console.log('[ComponentDidUpdate] ' + this.state.colorMode);
        // console.log(this.state.inputValue);
    }

    inputChangedHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

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
                            <ControlPanel colorMode={this.state.colorMode} inputChange={this.inputChangedHandler} inputValue={this.state.inputValue}/>
                            <OutputCodeBlock colorMode={this.state.colorMode} inputValue={this.state.inputValue} resetInput={this.resetInput}/>
                        </div>
                    </div>
                </div>
                
            </>  
        );
    };
};

export default Layout;