import React, { Component } from 'react'
import NameInput from './NameInput'
import NameList from './NameList'

export default class NameContainer extends Component{



  handleGeneratePairsClick(event){

  }

  render(){
    return (
      <div>
        <NameInput />
        <NameList />
      </div>
    )
  }
}
