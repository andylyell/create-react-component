import React from 'react';
import Button from '../UI/Button/Button';

const OutputCodeBlock = (props) => {
    return (
        <div className="code-block">
            <Button icon='clipboard' btnType="quinternary">Copy to Clipboard</Button>
            <pre>
                <code>
                    Import React from 'react';
                </code>
            </pre> 
        </div>
    );
}

export default OutputCodeBlock;