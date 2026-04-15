import { Component } from "react";
import style from "./Menus.module.css";
import MenuList from "../Menu-List/MenuList";
import data from "../../constant/data";

export default class Menus extends Component {
  render() {
    return (
      <>
      <div className={style["foods-container"]}>
        {data.map((item) => {
          const { title, price, img, desc } = item;

          return (
            <>
              <MenuList 
              title={title}
              price={price}
              img={img}
              desc={desc}
              />
            
            </>
         
          );
        })}
      </div>
      </>
    );
  }
}