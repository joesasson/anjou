import React, { Component } from 'react'
import { connect } from 'react-redux'
import PairItem from './PairItem'

class PairContainer extends Component {

  render(){
    return (
      <ul>
        {this.props.pairs.map((pair, i) => {
          return <PairItem key={i} pair={pair} />
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
