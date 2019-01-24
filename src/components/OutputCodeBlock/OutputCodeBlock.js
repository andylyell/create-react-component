import React from 'react';
import Button from '../UI/Button/Button';

function hasBeenClicked(e) {
    console.log(e.target);
    console.log('I have been clicked');
};

const OutputCodeBlock = (props) => {
    return (
        <div className="code-block">

            <div className="code-block__button-container">
                <Button clicked={hasBeenClicked} btnType="tertiary" icon="reset" colorMode={props.colorMode}>Reset</Button>
                <Button clicked={hasBeenClicked} btnType="secondary" icon="clipboard" colorMode={props.colorMode}>Copy to clipboard</Button>
            </div>

            <div className="code-block__button-effect--container">
                <div className="code-block__buttons-effect">
                    <div className="code-block__button-effect code-block__button-effect--red"></div>
                    <div className="code-block__button-effect code-block__button-effect--yellow"></div>
                    <div className="code-block__button-effect code-block__button-effect--green"></div>
                </div>
            </div>
            
            <pre>
                <code className="code-block__code">
                    Import React from 'react';<br/><br/>
                    <span className="code-block__code-comment">Your  component here </span><br/><br/>
                    export default Component;
                </code>
            </pre> 
        </div>
    );
}

export default OutputCodeBlock;