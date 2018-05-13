import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardText } from 'reactstrap'

const styles = {
  fontSize: '.9rem',
  color: '#666',
  padding: '9px',
  marginBottom: '5px'
}

const TrelloCard = ({name}) => (
  <Card body style={styles} draggable>
    <CardText>{name}</CardText>
  </Card>
)

TrelloCard.propTypes = {
  name: PropTypes.string.isRequired
}

export default TrelloCard;
