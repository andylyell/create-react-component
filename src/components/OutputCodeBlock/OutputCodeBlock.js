import React from 'react';
import Button from '../UI/Button/Button';

const OutputCodeBlock = (props) => {

    
    let codeSnippet = `//enter a component`

    if(!props.inputValue){
        codeSnippet = <span className="code-block__component-start-name">Enter a component name to get started</span>
    } else {


        switch(props.radioOption){
            case('function-option'): codeSnippet = `Import React from 'react';

const ${props.inputValue} = (props) => {
    return (
        <h1>This is the ${props.inputValue} component</h1>
    );
}
            
export default Component;`; break;
            case('class-option'): codeSnippet = `Import React from 'react';

class ${props.inputValue} extends React.component {
    render(){
        return (
            <h1>This is the ${props.inputValue} component</h1>
        );
    };
};
            
export default Component;`; break;}
        }

let disableCheck = !props.inputValue ? true : false;
const copyToClipboard = _ => {
    if(!disableCheck){
        navigator.clipboard.writeText(codeSnippet);
    }
}


    return (
        <div className="code-block">

            <div className="code-block__button-container">
                <Button clicked={props.resetInput} btnType="tertiary" icon="reset" colorMode={props.colorMode}>Reset</Button>
                <Button clicked={copyToClipboard} btnType="secondary" icon="clipboard" colorMode={props.colorMode}>Copy to clipboard</Button>
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
                    {codeSnippet}
                </code>
            </pre> 
        </div>
    );
}

export default OutputCodeBlock;