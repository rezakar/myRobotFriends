import {CHANGE_SEARCH_FIELD } from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, // we capitalized it because it is constant
    payload: text
})