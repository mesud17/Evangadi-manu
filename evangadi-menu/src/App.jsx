import { Component } from "react";
import './App.css'
import Header from "./components/Header/Header";
import Menus from "./components/Menus/Menus";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <Header />
          <Menus />
          <Footer />
        </div>
      </>
    );
  }
}
