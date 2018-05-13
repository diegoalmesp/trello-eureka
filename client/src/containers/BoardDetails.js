import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap'
import { saveCardOpt } from '../actions/trello_actions'
import CardList from './CardList'

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

  render() {
    if(Object.keys(this.state.lists).length === 0) {
      return <p>loading details...</p>
    }
    return (
      <div
        style={
          {
            backgroundColor: this.state.lists.prefs.backgroundColor,
            padding: '15px'
          }
        }
      >
        <h4 style={{color: '#fff'}}>{this.state.lists.name}</h4>
        <Row>
          {this.state.lists.lists.map(list => (
            <CardList
              key={list.id}
              list={list}
              saveCard={this.handleSaveCard}
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
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardDetails)
