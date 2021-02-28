import {
  //GET CURRENCY
  FETCH_CURRENCY_INFO_SUCCESS,
  FETCH_CURRENCY_INFO_FAILURE,
} from "../actions/currencyActions";

const initialState = {
  success: false,
  getCurrency: [],
  loadingInfo: false,
};

export default function currencyReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENCY_INFO_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        getCurrency: action.payload.data,
        loadingInfo: false,
      });

    case FETCH_CURRENCY_INFO_FAILURE:
      return Object.assign({}, state, {
        success: false,
        loadingInfo: false,
      });

    default:
      return state;
  }
}
