import React, { Component } from 'react'
import { connect } from 'react-redux'

class PairContainer extends Component {

  render(){
    return (
      <ul>
        {this.props.pairs.map((pair, i) => {
          return <li key={i} ><p>{pair[0]}</p><p>{pair[1]}</p></li>
        })}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    pairs: state.pairs
  }
}

export default connect(mapStateToProps)(PairContainer)
