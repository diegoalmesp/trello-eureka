import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { loadLists } from '../actions/trello_actions'
import Loading from '../components/common/loading'
import './Aside.css';

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
    const asideTitle = <h4 className="text-center">Board List</h4>

    if(!this.state.boards.length) {
      return (
        <div>
          {asideTitle}
          <Loading color='burlywood'/> {/*<p className="lead">loading boards...</p>*/}
        </div>
      )
    }
    return (
      <div className="Aside">
        {asideTitle}
        <Nav vertical>
          {this.state.boards.map(board => (
            <NavItem
              key={board.id}
              className="Item"
              style={{backgroundColor: board.prefs.backgroundColor}}
            >
              <NavLink
                className="Link"
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
