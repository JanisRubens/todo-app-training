import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";

export default class MainLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }
	
  render() {
console.log(this.props.children);
    return (
      <div id="main-wraper">
        <Header></Header>
        <main>
          {this.props.children}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}