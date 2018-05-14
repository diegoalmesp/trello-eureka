import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, Button, Col, Form, FormGroup, Input } from 'reactstrap'

import TrelloCard from '../components/TrelloCard'
import Loading from '../components/common/loading'

class CardList extends Component {
  state = {
    formOpen: false,
    cardName: ''
  }

  static propTypes = {
    list: PropTypes.object.isRequired,
    saveCard: PropTypes.func.isRequired,
    onDrop: PropTypes.func
  }

  handleOnChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  handleShowForm = (event) => {
    this.setState({formOpen: !this.state.formOpen, cardName: ''})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    this.props.saveCard(this.props.list.id, this.state.cardName)

    this.setState({formOpen: false, cardName: ''})
  }

  handleDragStart = (card) => {
    // console.log(card);
    // this.props.onDrag(card)
  }

  handleDrop = (event) => {
    const card = JSON.parse(event.dataTransfer.getData('card'))
    // card is dropped in same list, return
    if(card.origin === this.props.list.id) return

    this.props.onDrop({
      ...card,
      target: this.props.list.id
    })
  }

  handleDragOver = (e) => { e.preventDefault() }

  _renderFormOrButton = () => {
    if(!this.state.formOpen) {
      return (
        <Button
          onClick={this.handleShowForm}
        >add card...</Button>
      )
    }
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Input
            type="textarea"
            name="cardName"
            autoFocus
            value={this.state.cardName}
            onChange={this.handleOnChange}
          />
        </FormGroup>
        <Button type="submit">+</Button>
        <Button
          color="link"
          onClick={this.handleShowForm}
        >cancel</Button>
      </Form>
    )
  }

  _renderCards = () => {
    if(this.props.list.cards) {
      return (
        <div>
          {this.props.list.cards.map(card => (
            <TrelloCard
              key={card.id}
              card={{...card, origin: this.props.list.id}}

              // onDrag={this.handleDragStart}
            />
          ))}
        </div>
      )
    }
    return <Loading color='burlywood'/> // <p className="lead">loading cards...</p>
  }

  render() {
    // console.info(this.props.list)
    return (
      <Col sm="4">
        <Card
          body
          style={{backgroundColor: '#e2e4e6'}}
          onDrop={this.handleDrop}
          onDragOver={this.handleDragOver}
        >
          <CardTitle>{this.props.list.name || '???'}</CardTitle>

          {this._renderCards()}

          {this._renderFormOrButton()}
        </Card>
      </Col>
    )
  }
}

export default CardList
