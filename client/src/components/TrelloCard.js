import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText } from 'reactstrap'
import './TrelloCard.css'

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
        className="TrelloCard"
        body
        draggable
        onDragStart={this.handleDragStart}
      >
        <CardText>{this.props.card.name}</CardText>
      </Card>
    )
  }
}


export default TrelloCard;
