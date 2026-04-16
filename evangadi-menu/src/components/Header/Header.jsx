import style from './Header.module.css'

import { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
     <header className={style.title}>
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
   
      </>
    )
  }
}
