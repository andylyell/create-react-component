import React from 'react';

const OutputCodeBlock = (props) => {
    return (
        <div className="code-block">
            <div className="code-block__button-container">
                <div className="code-block__buttons">
                    <div className="code-block__button code-block__button--red"></div>
                    <div className="code-block__button code-block__button--yellow"></div>
                    <div className="code-block__button code-block__button--green"></div>
                </div>
            </div>
            
            <pre>
                <code>
                    Import React from 'react';
                </code>
            </pre> 
        </div>
    );
}

export default OutputCodeBlock;