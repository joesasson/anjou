import React, { Component } from 'react'
import NameInput from './NameInput'
import NameList from './NameList'

export default class NameContainer extends Component{

  render(){
    return (
      <div>
        <NameInput />
        <NameList />
      </div>
    )
  }
}
