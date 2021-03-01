import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrencyInfo } from "../src/components/redux/actions/currencyActions";
import "./App.scss";

import CurrencySelector from "./components/currency_selector/currency_selector";

const mapStateToProps = (state) => {
  return {
    get_currency: state.currencyReducers.getCurrency,
  };
};

const mapActionsToProps = {
  getCurrencyInfo,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class App extends Component {
    constructor() {
      super();
      this.state = {
        selectedCurrency: "",
        selectedDate: "",
      };
    }

    componentDidMount() {
      this.props.getCurrencyInfo();
    }

    currencyReceiver(rate) {
      this.setState({
        selectedCurrency: rate,
      });
    }
    dateReceiver(date) {
      this.setState({
        selectedDate: date,
      });
    }

    toggle = () => {
      this.setState({
        on: !this.state.on,
      });
    };

    render() {
      const { get_currency } = this.props;

      return (
        <div id="App">
          <div>
            <CurrencySelector
              selectedCurrency={(rate) => this.currencyReceiver(rate)}
            />
            <div className="currency_display">
              {get_currency.rates
                ? Object.keys(get_currency.rates)
                    .filter((rate) => {
                      return rate.includes(this.state.selectedCurrency);
                    })
                    .map((rate) => (
                      <>
                        {this.state.on ? (
                          <tr>
                            <td value={rate}>{rate}</td>
                            <td value={rate}>{get_currency.rates[rate]}</td>
                          </tr>
                        ) : (
                          <tr className="off">
                            <td value={rate}>{rate}</td>
                            <td value={rate}>{get_currency.rates[rate]}</td>
                          </tr>
                        )}
                      </>
                    ))
                : null}
              <button onClick={this.toggle} type="submit">
                {this.state.on ? "Ver menos" : "Ver más cotizaciones"}
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);
