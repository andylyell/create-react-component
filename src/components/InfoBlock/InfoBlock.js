import React from 'react';
import { addDarkClass, removeDarkClass } from '../../helpers/helpers';

const InfoBlock = (props) => {

    let infoStyle = "info-block";
    let infoStyleTitle = "info-block__title";
    let infoStyleText = "info-block__text";
    let infoStyleCreators = "info-block__creators";
    let infoStyleCreatorLink = "info-block__creator-link";

    if(props.colorMode){
        infoStyle = removeDarkClass(infoStyle);
        infoStyleTitle = removeDarkClass(infoStyleTitle);
        infoStyleText = removeDarkClass(infoStyleText);
        infoStyleCreators = removeDarkClass(infoStyleCreators);
        infoStyleCreatorLink = removeDarkClass(infoStyleCreatorLink);
    } else {
        infoStyle = addDarkClass(infoStyle);
        infoStyleTitle = addDarkClass(infoStyleTitle);
        infoStyleText = addDarkClass(infoStyleText);
        infoStyleCreators = addDarkClass(infoStyleCreators);
        infoStyleCreatorLink = addDarkClass(infoStyleCreatorLink);
    }

    return (
        <>
            <div className={infoStyleCreators}>
                <div>
                    By <span className="info-block__creator"> <a className={infoStyleCreatorLink} href="https://andylyell.co.uk/">Andy</a></span> and <span className="info-block__creator"><a className={infoStyleCreatorLink} href="">Sam</a></span>
                </div>
            </div>
            <div className={infoStyle}>
                <div className="info-block__container">
                <h1 className={infoStyleTitle}>Create, copy and use React <br/> components in a few seconds.</h1>
                    <p className={infoStyleText}>Use this simple tool to quickly create your own custom react components ready for use.</p>
                </div>  
            </div>
        </>
        
    );
};

export default InfoBlock;