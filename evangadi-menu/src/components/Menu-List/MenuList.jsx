import style from './MenuList.module.css'
import  { Component } from 'react'

export default class MenuList extends Component {
  render() {
    const { img, title, price, desc } = this.props

    return (
      <>
           <div className={style["single-food"]}>
          <div className={style.img}>
            <img src={img} alt={title} />
          </div>

          <div className={style["title-price"]}>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>

          <div className={style["food-desc"]}>
            {desc}
          </div>
        </div>
      </>
    )
  }
}