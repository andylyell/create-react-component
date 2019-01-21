import React from 'react';
import Button from '../UI/Button/Button';

const ControlPanel = (props) => {
    return (
        <>
            <div className="control__button-container">
                <div className="control__button-block">
                    <Button btnType="secondary">Simple</Button>
                    <Button btnType="primary">Advanced</Button>
                </div>
                <Button icon="reset" btnType="tertiary">Reset component</Button>
            </div>
            
        </>
    );
}

export default ControlPanel;