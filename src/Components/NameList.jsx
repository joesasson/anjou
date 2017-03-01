import React, { Component } from 'react'
import { connect } from 'react-redux'


class NameList extends Component {



  render(){
    return (
      <div>
        <ul>
          {this.props.names.map((name, i) => <li key={`name-${i}`}>{name}</li>)}
        </ul>
        <button>Generate Pairs</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    names: state.names
  }
}

export default connect(mapStateToProps)(NameList)
