import React from 'react';
import Button from '../UI/Button/Button';
import logo from '../../assets/images/crc-icon.svg';

const Layout = (props) => {
    return (
        <>
            <div>
                <p>Image</p>
                <img src={logo} className="layout--logo" alt="Create react app icon"/>
                <h1>Create react component</h1>
                <p>Use the menu to create your react component</p>
                <Button/>
                <Button/>
            </div>
            {props.children}
            <p>2019 © Sam Cook + Andy Lyell</p>
        </>
        
    );
}

export default Layout;