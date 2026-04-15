import { Component } from "react";
import Header from "./components/Header/Header";
import Menus from "./components/Menus/Menus";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <Header />
          <Menus />
        </div>
      </>
    );
  }
}
