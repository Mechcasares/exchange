import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrencyInfo } from "../redux/actions/currencyActions";

import "../../App.scss";

const mapStateToProps = (state) => {
  return { get_currency: state.currencyReducers.getCurrency };
};

const mapActionsToProps = {
  getCurrencyInfo,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class CurrencyDisplay extends Component {
    constructor() {
      super();
      this.state = {
        on: "",
        selectedTeam: "",
      };
    }

    componentDidMount() {
      this.props.getCurrencyInfo();
    }

    toggle = () => {
      this.setState({
        on: !this.state.on,
      });
    };

    render() {
      return (
        <div id="currency_display">
          {this.state.on && (
            <div>
              <div>
                {this.props.get_currency.rates
                  ? Object.keys(this.props.get_currency.rates).map((rate) => (
                      <td value={rate}>{rate}</td>
                    ))
                  : null}
              </div>
              <div>
                {this.props.get_currency.rates
                  ? Object.values(this.props.get_currency.rates).map((rate) => (
                      <td colspan="2" value={rate}>
                        {rate}
                      </td>
                    ))
                  : null}
              </div>
            </div>
          )}
          <button onClick={this.toggle} type="submit">
            Ver más cotizaciones
          </button>
        </div>
      );
    }
  }
);
