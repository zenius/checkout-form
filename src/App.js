import React, { Component } from "react";
import "./App.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { Header } from "./components/Header";
import { Overlay } from "./components/Overlay";
import { Container } from "./components/Container";
import { ImagePreview } from "./components/ImagePreviewArea/ImagePreview";
import { Checkout } from "./components/CheckoutArea/Checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      people: 1,
      price: 320.0,
      tax: 20,
      duration: 5,
      discount: 5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  //change the duration
  handleChange(event) {
    this.setState({ duration: event.target.value });
  }

  render() {
    const { people, price, tax, duration, discount } = this.state;
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="overlay"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <Header onChange={this.handleChange} />
          <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="container"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <Container>
            <ImagePreview
              price={price}
              duration={duration}
              people={people}
              image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"
            />
            <Checkout
              discount={discount}
              tax={tax}
              price={price}
              duration={duration}
              onSubmit={this.handleSubmit}
            />
          </Container>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
