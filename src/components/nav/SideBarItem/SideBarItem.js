import React from 'react';

import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import './SideBarItem.css';

function SideBarItem( props ) {

  return(
    <NavItem className={"sidebar-item " + (props.isOpen ? "active" : "")}>
      <NavLink onClick={props.onClick} href={props.link}>
        <i>{
          props.icon ? <FontAwesomeIcon icon={props.icon} /> : <FontAwesomeIcon icon={faQuestion} />
        }</i>
        <span>{props.children}</span>
      </NavLink>
    </NavItem>
  );
}

export default SideBarItem;