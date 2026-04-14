import style from './Header.module.css'

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
      <div className="all-container">
           <header className={style.title}>
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
      </div>
   
      </>
    )
  }
}
