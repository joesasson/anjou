import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPairs } from '../actions'
import { bindActionCreators } from 'redux'


class NameList extends Component {

  generatePairs(){
    let names = this.props.names
    let shuffledNames = this.shuffle(names)
    var newArray = []
    shuffledNames.forEach((el, i) => {
      if(i % 2 !== 0){
        newArray.push([el, shuffledNames[i - 1]])
      } else if (i === shuffledNames.length - 1){
        newArray.push([el, "No Partner Yet"])
      }
    })
    this.props.setPairs(newArray)
  }

  shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex--)

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.names.map((name, i) => <li key={`name-${i}`}>{name}</li>)}
        </ul>
        <button onClick={this.generatePairs.bind(this)} >Generate Pairs</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    names: state.names
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setPairs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NameList)
