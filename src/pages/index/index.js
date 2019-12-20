import React from 'react';
import { inject, observer } from "mobx-react";

import {Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'

function Index({userStore}) {
  return (
    <div className="bg-theme-dark">
      <Container>
        <Row className="min-vh-100 align-items-center justify-content-center">
          <Col sm="6">
            <Card className="rounded-xl shadow bg-theme-dark2 py-4">
              <CardBody>
                <Row>
                  <Col xs="12" className="text-center">
                    <FontAwesomeIcon icon={faBroom} size="4x" />
                    <h4 className="mt-2">Welcome to <span className="font-weight-bold">Broomn</span></h4>
                  </Col>
                  <Col xs="12" className="mt-5 px-5 text-center">
                    <Form>
                      <FormGroup>
                        <Input type="text" name="broomname" id="broomname" placeholder="broomname" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="password" name="password" id="password" placeholder="password" />
                      </FormGroup>
                      <Button className="bg-theme-btn mt-4">take off</Button>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default inject("userStore")(observer(Index));
