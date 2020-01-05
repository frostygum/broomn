import React from 'react';
import { inject, observer } from "mobx-react";

import { Container, Navbar } from 'reactstrap';

function Index( props ) {

  return(
    <Navbar expand="lg" color={props.color} className={"rounded shadow mb-4"}>
      <Container fluid>
        {props.children}
      </Container>
    </Navbar>
  );
}

export default inject("userStore")(observer(Index));