import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";

import CurrencyDisplay from "./components/currency_display/currency_display";
import CurrencySelector from "./components/currency_selector/currency_selector";

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class App extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="App">
          <div>
            <CurrencySelector />
            <CurrencyDisplay />
          </div>
        </div>
      );
    }
  }
);
