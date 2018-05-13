import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Card, CardTitle, CardText, Button, Row, Col, Form, FormGroup, Input } from 'reactstrap'

import TrelloCard from '../components/TrelloCard'

class CardList extends Component {
  state = {
    formOpen: false,
    cardName: ''
  }

  static propTypes = {
    list: PropTypes.object.isRequired,
    saveCard: PropTypes.func.isRequired
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
            <TrelloCard key={card.id} name={card.name} />
          ))}
        </div>
      )
    }
    return null
  }

  render() {
    console.info(this.props.list)
    return (
      <Col sm="4">
        <Card body style={{backgroundColor: '#e2e4e6'}}>
          <CardTitle>{this.props.list.name || '???'}</CardTitle>

          {this._renderCards()}

          {this._renderFormOrButton()}
        </Card>
      </Col>
    )
  }
}

export default CardList
