import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrencyInfo } from "../redux/actions/currencyActions";

import { ReactComponent as Calendar } from "../../../src/img/svg/calendar.svg";
import { ReactComponent as Arrow } from "../../../src/img/svg/arrow_down.svg";

import "../../App.scss";

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
  class CurrencySelector extends Component {
    constructor() {
      super();
      this.state = {};
    }

    componentDidMount() {
      this.props.getCurrencyInfo();
    }

    handleSelectChangeRate(event) {
      this.props.selectedCurrency(event.target.value);
    }

    render() {
      const { get_currency } = this.props;
      return (
        <div id="currency_selector">
          <h1>Historico de cotizaciones</h1>
          <div>
            <h3>Selecciona la moneda de preferencia</h3>
            <div className="dropdown">
              <select
                value={this.state.value}
                onChange={(e) => this.handleSelectChangeRate(e)}
              >
                {get_currency.rates
                  ? Object.keys(get_currency.rates).map((rate) => (
                      <option value={rate}>{rate}</option>
                    ))
                  : null}
              </select>
              <Arrow />
            </div>
            <h3>Ingresa la fecha de cotización</h3>
            <div className="input_date">
              <input type="date" id="myDate" value="2010-01-12" required />
              <Calendar />
            </div>
            <button type="submit">Buscas cotizacion</button>
          </div>
        </div>
      );
    }
  }
);
