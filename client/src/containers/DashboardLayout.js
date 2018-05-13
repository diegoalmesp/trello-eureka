import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Header from './Header'
import Aside from './Aside'
import BoardDetails from './BoardDetails'

class DashboardLayout extends Component {
  state = {}

  render() {
    return(
      <div className="app">
        <Container fluid>
          <Row>
            <Col xs="3">
              <Aside />
            </Col>
            <Col>
              <Header />
              <BoardDetails />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default DashboardLayout;
