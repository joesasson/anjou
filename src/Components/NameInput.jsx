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
        <div className="measure center">
          <input id="name" ref='name' className="grow center input-reset br4 b--black-50 pa2 mb2 db w-60 bw3" type="text" placeholder='Enter a name' required />
        </div>
          <button ref="addButton" className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green" type="submit">Add Name</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addName }, dispatch)
}

export default connect(null, mapDispatchToProps)(NameInput)
