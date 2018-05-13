import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText } from 'reactstrap'

const styles = {
  fontSize: '.9rem',
  color: '#666',
  padding: '9px',
  marginBottom: '5px'
}

class TrelloCard extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    onDrag: PropTypes.func
  }

  handleDragStart = (event) => {
    const stringCard = JSON.stringify(this.props.card)
    event.dataTransfer.setData('card', stringCard)
    // this.props.onDrag(event)
  }

  render() {
    return (
      <Card
        body
        draggable
        style={styles}
        onDragStart={this.handleDragStart}
      >
        <CardText>{this.props.card.name}</CardText>
      </Card>
    )
  }
}


export default TrelloCard;
