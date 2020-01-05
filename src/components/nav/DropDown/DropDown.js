import React, { useState } from 'react';

import { Collapse, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import './DropDown.css';

function DropDown( props ) {

  let [isOpen, setOpen] = useState(false);

  return(
    <NavItem className={"dropdown " + (isOpen ? "active" : "")}>
      <NavLink data-toggle="collapse" className="dropdown-toggle" onClick={() => {setOpen(!isOpen)}}>
        <i>{
          props.icon ? props.icon : <FontAwesomeIcon icon={faQuestion} />
        }</i>
        <span>{props.name ? props.name : ""}</span>
      </NavLink>
      <Collapse isOpen={isOpen}>
        <ul className="list-unstyled">
          {props.children}
        </ul>
      </Collapse>
    </NavItem>
  );
}

export default DropDown;