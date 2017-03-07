import React from 'react'
import anjouLogo from '../anjou.svg'

export default function AppHeader(){
  return <div>
          <header className="rotated bg-white-90 mw5 ma3 center logo-header pv2 pv3-ns">
            <img src={anjouLogo} className="h2 w2" alt="avatar" />
            <h2 className="logo" >Anjou</h2>
            {/* <p className="tagline" >Matching Made Easy</p> */}
          </header>

         </div>
}
