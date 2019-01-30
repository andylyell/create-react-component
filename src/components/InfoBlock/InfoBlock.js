import React from 'react';
import { addDarkClass, removeDarkClass } from '../../helpers/helpers';

const InfoBlock = (props) => {

    let infoStyle = "info-block";
    let infoStyleTitle = "info-block__title";
    let infoStyleText = "info-block__text";

    if(props.colorMode){
        infoStyle = removeDarkClass(infoStyle);
        infoStyleTitle = removeDarkClass(infoStyleTitle);
        infoStyleText = removeDarkClass(infoStyleText);
    } else {
        infoStyle = addDarkClass(infoStyle);
        infoStyleTitle = addDarkClass(infoStyleTitle);
        infoStyleText = addDarkClass(infoStyleText);
    }

    return (
        <>
            <div className="info-block__creators">
                <div>
                    By <span className="info-block__creator"> <a className="info-block__creator-link" href="https://andylyell.co.uk/">Andy</a></span> and <span className="info-block__creator"><a className="info-block__creator-link" href="">Sam</a></span>
                </div>
            </div>
            <div className={infoStyle}>
                <div className="info-block__container">
                <h1 className={infoStyleTitle}>Create, copy and use React <br/> components in a few seconds.</h1>
                    <p className={infoStyleText}>Oh, that's Million Ants. I can't see the ants from over here, I just assumed that was um.. Turd Man, Wiggly Turd Man.</p>
                </div>  
            </div>
        </>
        
    );
};

export default InfoBlock;