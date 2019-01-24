import React from 'react';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import ControlPanel from '../ControlPanel/ControlPanel';
import OutputCodeBlock from '../OutputCodeBlock/OutputCodeBlock';

class Layout extends React.Component {

    state = {
        colorMode: true
    }

    componentDidMount(){
        console.log('[ComponentDidMount] ' + this.state.colorMode);
    }

    componentDidUpdate(){
        console.log('[ComponentDidUpdate] ' + this.state.colorMode);
    }

    colorSwitch = () => {
        this.setState((prevState) => {
            return {colorMode: !prevState.colorMode}
          });
    }

    render(){

        const styleName = "layout__control";
        let layoutControlStyle = null;

        if(this.state.colorMode){
            layoutControlStyle = styleName;
        } else {
            layoutControlStyle = styleName + "--dark";
        }


        return (
            <>
                <div className="layout">
                    <Header colorSwitch={this.colorSwitch} colorMode={this.state.colorMode}/>
                    <InfoBlock colorMode={this.state.colorMode}/>
                    <div className={layoutControlStyle}>
                        <div className="layout__control--container">
                            <ControlPanel colorMode={this.state.colorMode}/>
                            <OutputCodeBlock colorMode={this.state.colorMode}/>
                        </div>
                    </div>
                </div>
                
            </>  
        );
    };
};

export default Layout;