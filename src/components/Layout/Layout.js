import React from 'react';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import ControlPanel from '../ControlPanel/ControlPanel';
import OutputCodeBlock from '../OutputCodeBlock/OutputCodeBlock';



const Layout = (props) => {
    return (
        <>
            <Header/>
            <InfoBlock/>
            <div className="layout__control">
                <div className="layout__control--container">
                    <ControlPanel/>
                    <OutputCodeBlock/>
                </div>
            </div>
        </>
        
    );
}

export default Layout;