import * as actionTypes from './actions';

const initialState = {
    searchResults: [],
    searchResultsCount: 12
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SAVE_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.results
            };
        
        case actionTypes.INCREASE_SEARCH_RESULTS_COUNT:
            return {
                ...state,
                searchResultsCount: state.searchResultsCount + 12
            }

        case actionTypes.RESET_SEARCH_RESULTS_COUNT:
            return {
                ...state,
                searchResultsCount: 12
            }
        
        case actionTypes.RESET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: []
            }

        default:
            return state;
    }
};

export default reducer;