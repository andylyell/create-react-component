import React from 'react';

const InfoBlock = (props) => {

    const styleName = "info-block";
    let infoStyle = null;
    let infoStyleTitle = null;
    let infoStyleText = null;

    if(props.colorMode){
        infoStyle = styleName;
        infoStyleTitle = styleName + "__title";
        infoStyleText = styleName + "__text";
    } else {
        infoStyle = styleName + "--dark";
        infoStyleTitle = styleName + "__title--dark";
        infoStyleText = styleName + "__text--dark";
    }

    return (
        <div className={infoStyle}>
            <div className={styleName + "__container"}>
             <h1 className={infoStyleTitle}>Create, copy and use React <br/> components in a few seconds.</h1>
                <p className={infoStyleText}>Oh, that's Million Ants. I can't see the ants from over here, I just assumed that was um.. Turd Man, Wiggly Turd Man.</p>
            </div>  
        </div>
        
    );
};

export default InfoBlock;