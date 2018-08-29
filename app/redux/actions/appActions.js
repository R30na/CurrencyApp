export const CURRENCIES_AVAILABLE = 'CURRENCIES_AVAILABLE';
export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';
export const SET_BASE_CURRENCY_AMOUNT = 'SET_BASE_CURRENCY_AMOUNT';
export const ENABLE_LOADING = 'ENABLE_LOADING';

import httpService from '../../services/Http.service';

export function getCurrencies() {
    return (dispatch) => {
        httpService.httpGet().then(data => {
            if (data.data.success) {
                dispatch({
                    type: CURRENCIES_AVAILABLE,
                    loading: false,
                    currencies: data.data.rates
                });
            }
        }).catch(error => {
            console.log(error);
        })
    }
}
export function setCurrentCountry(country) {
    return (dispatch) => {
        dispatch({
            type: SET_CURRENT_COUNTRY,
            selectedCountrySymbol: country.symbol,
            selectedCountryName: country.name,
        });
    }
}
export function setBaseCurrencyAmount(amount) {
    return (dispatch) => {
        dispatch({
            type: SET_BASE_CURRENCY_AMOUNT,
            baseCurrencyAmount: amount
        });
    }
}
export function enableLoading() {
    return (dispatch) => {
        dispatch({
            type: ENABLE_LOADING,
            loading: true
        });
    }
}
