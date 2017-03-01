import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addName } from '../actions'
import { bindActionCreators } from 'redux'

class NameInput extends Component {

  handleAddNameSubmit(event){
    event.preventDefault()
    this.props.addName(this.refs.name.value);
    this.refs.name.value = ''
  }

  render(){
    return (
      <form onSubmit={this.handleAddNameSubmit.bind(this)} >
        <input ref='name' placeholder='Enter a name' required/>
        <button type="submit">Add Name</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addName }, dispatch)
}

export default connect(null, mapDispatchToProps)(NameInput)
