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
        return (
            <>
                <Header colorSwitch={this.colorSwitch} colorMode={this.state.colorMode}/>
                <InfoBlock/>
                <div className="layout__control">
                    <div className="layout__control--container">
                        <ControlPanel/>
                        <OutputCodeBlock colorMode={this.state.colorMode}/>
                    </div>
                </div>
                
            </>  
        );
    };
};

export default Layout;