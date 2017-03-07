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
      <article className="pa1 pa2-ns" >
        <h2 className="f4 pa1 bold center mw6">Names:</h2>
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
          {this.props.names.map((name, i) => <li className="ph3 pv2 bb b--light-silver" key={`name-${i}`}>{name}</li>)}
        </ul>
        <button className="f6 grow br-pill ba bw2 ph3 pv2 mb2 dib dark-green" onClick={this.generatePairs.bind(this)} >Generate Pairs</button>
      </article>
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
