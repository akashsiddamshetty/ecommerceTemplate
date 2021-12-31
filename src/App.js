import './components/css/css.css'
import React from 'react';
import { Component } from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
class App extends Component {
  state = {
    counter: 0,
    title: "Fall Limited Edition Sneakers",
    price: 125.00,
    addtocart: false
  };

  plus = e => {
    const counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  };
  minus = e => {
    const counter = this.state.counter;
    this.setState({ counter: counter - 1 });
  };
  addToCart = () => {
    this.setState({
      addtocart: !this.state.addtocart
    });
  };
  removeFromCart = () => {
    this.setState({
      addtocart: !this.state.addtocart
    });
  };
  render() {
    return (
      <>
        <Header
          title={this.state.title}
          price={this.state.price}
          counter={this.state.counter}
          addtocart={this.state.addtocart}
          removeFromCart={this.removeFromCart}
           />
        <Section
          plus={this.plus}
          minus={this.minus}
          counter={this.state.counter}
          title={this.state.title}
          price={this.state.price}
          addToCart={this.addToCart}
        />
      </>
    );
  }
}

export default App;
