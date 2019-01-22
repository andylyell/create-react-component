import React from 'react';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import ControlPanel from '../ControlPanel/ControlPanel';
import OutputCodeBlock from '../OutputCodeBlock/OutputCodeBlock';

class Layout extends React.Component {

    state = {
        test: true
    }

    componentDidMount(){
        console.log('[ComponentDidMount] ' + this.state.test);
    }

    componentDidUpdate(){
        console.log('[ComponentDidUpdate] ' + this.state.test);
    }

    colorSwitch = () => {
        this.setState((prevState) => {
            return {test: !prevState.test}
          });
    }

    render(){
        return (
            <>
                <Header colorSwitch={this.colorSwitch}/>
                <InfoBlock/>
                <div className="layout__control">
                    <div className="layout__control--container">
                        <ControlPanel/>
                        <OutputCodeBlock/>
                    </div>
                </div>
            </>  
        );
    };
};

export default Layout;