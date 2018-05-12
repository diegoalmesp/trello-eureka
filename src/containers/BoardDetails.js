import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  board: PropTypes.object
}

class BoardDetails extends Component {
  render() {
    return (
      <h1>BoardDetails</h1>
    )
  }
}

BoardDetails.propTypes = propTypes

export default BoardDetails
