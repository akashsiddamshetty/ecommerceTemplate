import './components/css/css.css'
import React from 'react';
import { Component } from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import Collection from './components/Collection'
import Men from './components/Men';
import Women from './components/Women';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from "react-router";

class App extends Component {
  state = {
    counter: 0,
    title: "Fall Limited Edition Sneakers",
    price: 125.00,
    addtocart: false,
    cart: false
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
      addtocart: true
    });
  };
  removeFromCart = () => {
    this.setState({
      addtocart: false
    });
  };
  openCart = () => {
    this.setState({
      cart: !this.state.cart
    });
  }
  closeCart = () => {
    this.setState({
      cart: false
    });
  }
  render() {
    return (
      <>
        <Header
          title={this.state.title}
          price={this.state.price}
          counter={this.state.counter}
          addtocart={this.state.addtocart}
          removeFromCart={this.removeFromCart}
          openCart={this.openCart}
          cart={this.state.cart}
        />
        <Routes>

          <Route exact path='/'
            element={

              <Section
                plus={this.plus}
                minus={this.minus}
                counter={this.state.counter}
                title={this.state.title}
                price={this.state.price}
                addToCart={this.addToCart}
                closeCart={this.closeCart}

              />
            }
          />
          <Route path='/Collection' element={<Collection/>}/>
          <Route path='/Men' element={<Men/>}/>
          <Route path='/Women' element={<Women/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>

        </Routes>
      </>
    );
  }
}

export default App;
