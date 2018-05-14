import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../reducers/trello_reducer'
import { loadBoards } from '../actions/trello_actions'

import Aside from './Aside'
import BoardDetails from './BoardDetails'

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

class DashboardLayout extends Component {
  componentDidMount() {
    store.dispatch(loadBoards())
  }

  render() {
    return(
      <Provider store={store}>
        <div className="app">
          <Container fluid>
            <Row>
              <Col xs="3">
                <Aside />
              </Col>
              <Col>
                <BoardDetails />
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    )
  }
}

export default DashboardLayout
