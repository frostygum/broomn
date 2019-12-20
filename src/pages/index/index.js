import React from 'react';
import { inject, observer } from "mobx-react";

import {Container, Row, Col, Badge} from 'reactstrap';

function Index({userStore}) {
  return (
    <Container>
      <Row>
        <Col>
          <Badge>
          {userStore.name}
          </Badge>
        </Col>
      </Row>
    </Container>
  );
}

export default inject("userStore")(observer(Index));
