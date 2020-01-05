import React from 'react';

import { Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import './SideBar.css';

function SideBar( props ) {

  return(
    <Nav vertical id="sidebar" className={props.isOpen ? "active" : ""}>
      <div className="sidebar-header">
        <h3 className="font-weight-bold m-0">Broomn</h3>
        <strong><FontAwesomeIcon icon={props.icon ? props.icon : faQuestion} /></strong>
      </div>

      <ul className="list-unstyled components">
        {props.children}
      </ul>
    </Nav>
  );
}

export default SideBar;