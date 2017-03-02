import React, { Component } from 'react'
import { connect } from 'react-redux'

class PairContainer extends Component {
  render(){
    return (
      <div>
        Pairs go here
      </div>
    )
  }
}

export default connect(null)(PairContainer)
