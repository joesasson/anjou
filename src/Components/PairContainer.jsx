import React, { Component } from 'react'
import { connect } from 'react-redux'
import PairItem from './PairItem'

class PairContainer extends Component {

  render(){
    return (
      <div>
        {this.props.pairs.map((pair, i) => {
          return <PairItem key={i} pair={pair} />
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    pairs: state.pairs
  }
}

export default connect(mapStateToProps)(PairContainer)
