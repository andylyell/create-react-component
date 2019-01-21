import React from 'react';
import Button from '../UI/Button/Button';
import CrcIcon from '../../assets/icons/crc-icon.svg'

const Header = () => {
    return (
        <nav className="nav">
            <div className="nav__title">
                <img className="nav__title__icon" src={CrcIcon} alt=""/>
                <p>Create react component</p>
            </div>
            <Button icon="lightbulb" btnType="primary">Dark Mode</Button>
        </nav>
    );
};

export default Header;