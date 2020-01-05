import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

import './DropDownItem.css';

function DropDownItem(props) {

  return (
    <li>
      <a href={props.link ? props.link : "#"} className={props.className}>
        <i>{
          props.icon ? <FontAwesomeIcon icon={props.icon} /> : <FontAwesomeIcon icon={faQuestion} />  
        }</i>
        <span>{props.children}</span>
      </a>
    </li>
  );
}

export default DropDownItem;
