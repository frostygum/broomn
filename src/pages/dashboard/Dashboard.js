import React, { useState } from 'react';
import { inject, observer } from "mobx-react";
import { useRouteMatch } from 'react-router-dom';

import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faEllipsisV, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { SideBar, SideBarItem, DropDown, DropDownItem, NavBar, Wrapper, WrapperContent } from '../../components/nav';
import Profile from './Profile/Profile';
import Home from './Home/Home';

function DashBoard(props) {

  let { url } = useRouteMatch();
  let [isOpen, setOpen] = useState(true);
  let location = props.location.pathname.split("/");

  // make sure the location is valid when there is '/' in the last url
  if(location[location.length - 1] === "") {
    location = location[location.length - 2];
    console.log("ok")
  }
  else {
    location = location[location.length - 1];
  };

  // function for toggle the sidebar state
  function toggle() {setOpen(!isOpen);};

  return (
    <Wrapper color="dark" dark>
      <SideBar isOpen={isOpen} icon={faBroom}>
        <SideBarItem 
          icon={faHome} 
          isOpen={location === "dashboard" ? true : false}
          onClick={()=>{props.history.push(`${url}`)}}
        >
          Home
        </SideBarItem>
        <SideBarItem 
          icon={faUser} 
          isOpen={location === "profile" ? true : false}
          onClick={()=>{props.history.push(`${url}/profile`)}}
        >
          Profile
        </SideBarItem>
        <DropDown name="Components">
          <DropDownItem className="active">Home 1</DropDownItem>
          <DropDownItem icon={faBroom}>Home 1</DropDownItem>
          <DropDownItem icon={faBroom}>Home 1</DropDownItem>
        </DropDown>
        <SideBarItem icon={faGithub}>Github</SideBarItem>
      </SideBar>

      <WrapperContent>
        <NavBar color="primary">
          <Button color="light" className="shadow" onClick={() => {toggle()}}>
            <i><FontAwesomeIcon icon={faEllipsisV} /> </i>
          </Button>
          <p className="m-0">ok</p>
        </NavBar>

        <Container fluid>
          <Row>
            <Col className="bg-theme-primary rounded">
              {(() => {
                switch(props.location.pathname) {
                  case `${url}` : 
                    return <Home />;
                  case `${url}/profile` : 
                    return <Profile />
                  default :
                    return "404 not found"
                }
              })()}
            </Col>
          </Row>
        </Container>
      </WrapperContent>
    </Wrapper>
  );
}

export default inject("userStore")(observer(DashBoard));
