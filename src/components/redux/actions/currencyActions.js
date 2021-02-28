import axios from "axios";

export const FETCH_CURRENCY_INFO_SUCCESS = "FETCH_CURRENCY_INFO_SUCCESS";
export const FETCH_CURRENCY_INFO_FAILURE = "FETCH_CURRENCY_INFO_FAILURE";

// ---------------------------- EXPORTS ---------------------------- //

export const fetchCurrencyInfoSuccess = (data) => ({
  type: FETCH_CURRENCY_INFO_SUCCESS,
  payload: { data },
});

export const fetchCurrencyInfoFailure = (error) => ({
  type: FETCH_CURRENCY_INFO_FAILURE,
  payload: { error },
});

// ---------------------------- FUNCTIONS ---------------------------- //

export function getCurrencyInfo() {
  return (dispatch) => {
    return axios
      .get("https://api.exchangeratesapi.io/2010-01-12")
      .then((response) => dispatch(fetchCurrencyInfoSuccess(response.data)))
      .catch((error) => dispatch(fetchCurrencyInfoFailure(error)));
  };
}
