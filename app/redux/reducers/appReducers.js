import { CURRENCIES_AVAILABLE } from "../actions/appActions";
import { SET_CURRENT_COUNTRY } from "../actions/appActions";
import { SET_BASE_CURRENCY_AMOUNT } from "../actions/appActions";
import { ENABLE_LOADING } from "../actions/appActions";

let appDataState = {

    loading: true,
    baseCurrencyAmount: 0,
    currencies: {
        DKK: 0,
        INR: 0,
        USD: 0,
        THB: 0
    },
    selectedCountryName: 'Denmark',
    selectedCountrySymbol: 'DKK',
}


export const appReducer = (state = appDataState, action) => {

    switch (action.type) {


        case CURRENCIES_AVAILABLE:
            state = Object.assign({}, state, {
                loading: action.loading,
                currencies: action.currencies
            });
            return state;
        case SET_CURRENT_COUNTRY:
            state = Object.assign({}, state, {
                selectedCountrySymbol: action.selectedCountrySymbol,
                selectedCountryName: action.selectedCountryName,
            });
            return state;
        case SET_BASE_CURRENCY_AMOUNT:
            state = Object.assign({}, state, {
                baseCurrencyAmount: action.baseCurrencyAmount
            });
            return state;
        case ENABLE_LOADING:
            state = Object.assign({}, state, {
                loading: action.loading
            });
            return state;

        default:
            return state;
    }
};
