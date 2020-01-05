import React from 'react';

import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'

import './login.css';

function Index({history}) {
  return (
    <div className="bg-dark">
      <Container>
        <Row className="min-vh-100 align-items-center justify-content-center">
          <Col sm="6">
            {/* dikasi z-index supaya tulisan versi untuk mobile tidak menutupi tombol login */}
            <Card className="rounded-xl shadow text-light py-4" style={{zIndex: "5", background: "var(--gray-dark)"}}>
              <CardBody>
                <Row>
                  <Col xs="12" className="text-center">
                    <FontAwesomeIcon icon={faBroom} size="4x" id="icon" />
                    {/* Ini judul login page */}
                    <h4 className="mt-2">Welcome to <span className="font-weight-bold">Broomn</span></h4>
                  </Col>
                  <Col xs="12" className="mt-5 px-5 text-center">
                    {/* ini form login */}
                    <Form>
                      <FormGroup>
                        <Input type="text" name="broomname" id="broomname" placeholder="broomname" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="password" name="password" id="password" placeholder="password" />
                      </FormGroup>
                      {/* ini button untuk login */}
                      <Button 
                        color="primary"
                        className="font-weight-bold mt-4"
                        onClick={() => {history.push("/dashboard")}}            
                      >take off</Button>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          {/* ini app version */}
          <div id="buildVer">v 0.1.0</div>
        </Row>
      </Container> 
    </div>
  );
}

export default Index;
