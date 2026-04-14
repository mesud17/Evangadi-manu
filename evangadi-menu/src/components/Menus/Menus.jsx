import { Component } from "react";
import style from "./Menus.module.css";
import MenuList from "../Menu-List/MenuList";
import data from "../../constant/data";

export default class Menus extends Component {
  render() {
    return (
      <div className={style["foods-container"]}>
        {data.map((item) => {
          const { id, title, price, img, desc } = item;

          return (
            <MenuList
              key={id}
              title={title}
              img={img}
              price={price}
              desc={desc}
            />
          );
        })}
      </div>
    );
  }
}