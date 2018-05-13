import React from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap'

const CardList = ({title, children}) => (
  <Row>
    <Col sm="4">
      <Card body>
        <CardTitle>{title || '???'}</CardTitle>
        {children || <CardText>empty list</CardText>}
      </Card>
    </Col>
  </Row>
)
