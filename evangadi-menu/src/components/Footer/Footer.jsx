import { Component } from 'react'
import style from './Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className={style.footer}>
  <div className={style.socials}>
  <a href="#">
    <i className={`fab fa-facebook-f ${style.icon}`}></i>
  </a>

  <a href="#">
    <i className={`fab fa-instagram ${style.icon}`}></i>
  </a>

  <a href="#">
    <i className={`fab fa-youtube ${style.icon}`}></i>
  </a>

  <a href="#">
    <i className={`fab fa-tiktok ${style.icon}`}></i>
  </a>
</div>
</footer>
      </>
    )
  }
}
