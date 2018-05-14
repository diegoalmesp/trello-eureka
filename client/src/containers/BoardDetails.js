import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import { saveCardOpt, moveCardOpt } from '../actions/trello_actions'
import CardList from './CardList'
import Loading from '../components/common/loading'
import './BoardDetails.css'

class BoardDetails extends Component {
  state = {
    lists: {}
  }

  static propTypes = {
    lists: PropTypes.object
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      lists: nextProps.lists
    }
  }

  handleSaveCard = (list_id, name) => {
    this.props.createNewCard(list_id, name)
  }

  handleDrop = (card) => {
    this.props.moveCard(card)
  }

  render() {
    if(Object.keys(this.state.lists).length === 0) {
      return <Loading color='burlywood'/> // <p className="lead">loading details...</p>
    }
    return (
      <div
        className="BoardDetails"
        style={{backgroundColor: this.state.lists.prefs.backgroundColor}}
      >
        <h4 style={{color: '#fff'}}>{this.state.lists.name}</h4>
        <Row>
          {this.state.lists.lists.map(list => (
            <CardList
              key={list.id}
              list={list}
              saveCard={this.handleSaveCard}
              onDrop={this.handleDrop}
            />
          ))}
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewCard: (list_id, name) => {
      dispatch(saveCardOpt(list_id, name));
    },
    moveCard: (card_id, list_id) => {
      dispatch(moveCardOpt(card_id, list_id));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardDetails)
