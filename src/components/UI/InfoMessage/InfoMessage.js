import React from "react";

const InfoMessage = (props) => {

  let infoClasses = null;
  let infoBlock = null;
  let infoIcon = null;

  const infoStyleIcon =  <svg className="info-message__icon--info" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
  <path d="M11 17h2v-6h-2v6zm1-15a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM11 9h2V7h-2v2z"/>
  </svg>
  const errorStyleIcon =  <svg className="info-message__icon--error" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
  <g id="icon">
      <path
        d="M2 16c0 7.7 6.3 14 14 14s14-6.3 14-14S23.7 2 16 2A14 14 0 0 0 2 16zm23.1 7.7L8.3 6.9C10.4 5 13.2 4 16 4a12 12 0 0 1 12 12c0 2.8-1 5.6-2.9 7.7zM8.2 25.2c-5-4.3-5.6-11.9-1.4-16.9l16.9 16.9A12 12 0 0 1 16 28c-2.8 0-5.6-1-7.8-2.8z"
        id="Icon_20_"
      />
    </g>
  </svg>
  

  switch(props.infoType){
    case('info'): infoClasses = ['info-message', 'info-message__info'].join(' '); infoIcon = infoStyleIcon; break;
    case('error'): infoClasses = ['info-message', 'info-message__error'].join(' '); infoIcon = errorStyleIcon; break;
    default: infoClasses = ['info-message', 'info-message__info'].join(' '); infoIcon = infoStyleIcon; break;
};

  return (
    <div className={infoClasses}>
      {infoIcon}
      <p>{props.children}</p>
    </div>
  );
};

export default InfoMessage;