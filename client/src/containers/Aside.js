import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { loadLists } from '../actions/trello_actions'

class Aside extends Component {
  state = {
    boards: []
  }

  static propTypes = {
    boards: PropTypes.array.isRequired
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      boards: nextProps.boards
    }
  }

  handleNavClick = (board_id) => {
    this.props.loadBoardInDetails(board_id)
  }

  render() {
    const asideTitle = <p>Board List</p>

    if(!this.state.boards.length) {
      return (
        <div>
          {asideTitle}
          <p>loading boards...</p>
        </div>
      )
    }
    return (
      <div>
        {asideTitle}
        <Nav vertical>
          {this.state.boards.map(board => (
            <NavItem key={board.id} style={{backgroundColor: board.prefs.backgroundColor}}>
              <NavLink
              href="#"
              onClick={() => this.handleNavClick(board.id)}
            >{board.name}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    boards: state.boards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadBoardInDetails: (board_id) => {
      dispatch(loadLists(board_id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
