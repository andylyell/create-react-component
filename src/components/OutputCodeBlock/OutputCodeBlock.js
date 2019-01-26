import React from 'react';
import Button from '../UI/Button/Button';

function hasBeenClicked(e) {
    console.log(e.target);
    console.log('I have been clicked');
};

const OutputCodeBlock = (props) => {

    let componentName = '';

    if(!props.inputValue){
        componentName = <span className="code-block__component-start-name">enter-component-name</span> ;
    } else {
        componentName = <span className="code-block__component-name">{props.inputValue}</span> ;
    }

    return (
        <div className="code-block">

            <div className="code-block__button-container">
                <Button clicked={props.resetInput} btnType="tertiary" icon="reset" colorMode={props.colorMode}>Reset</Button>
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
                    {/* <span className="code-block__code-comment">Your  component here </span><br/><br/> */}
                    const {componentName} = (props) => &#123; <br/><br/>
                        return ( <br/><br/>
                            &lt;h1&gt; This is the {componentName} component &lt;/h1&gt;
                        ); <br/><br/>
                    &#125; <br/><br/>
                    export default {componentName};
                </code>
            </pre> 
        </div>
    );
}

export default OutputCodeBlock;


{/* <code className="code-block__code">
                    Import React from 'react';<br/><br/>
                    <span className="code-block__code-comment">Your  component here </span><br/><br/>
                    const {componentName} = () => &#123; <br/><br/>
                        return (); <br/><br/>
                    &#125; <br/><br/>
                    export default {componentName};
                </code> */}

//                 {`Import React from 'react';

// const Component = (props) => {
//     return (
//         <h1>This is the ${componentName} component</h1>
//     );
// }; 
                        
// export default Component;`}

/* 
Import React from 'react';

const Component = (props) => {
    return (
        <h1>This is the Component Component</h1>
    );
}

export default Component;
*/

/*
import React from 'react';

class Component extends React.component {
    render(){
        return(
            <h1>This is the Component Component</h1>
        );
    }
}

export defualt Component;

*/