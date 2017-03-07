import React from 'react'

export default function PairItem(props){
  var pair = props.pair
  return (
    <article className="cf">
      <div className="fl pa2 w-50 br3 bg-near-white tc">{pair[0]}</div>
      <div className="fl pa2 w-50 br3 bg-light-gray tc">{pair[1]}</div>
    </article>
  )
}
