import {KW_LOAD, KW_SUCCESS, KW_FAIL} from '../actions/kanyeWestActions';

const initialState = {
    quote: "",
    loading: false
};

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case KW_LOAD:
            return{
                ...state,
                looading: true
            }
        case KW_SUCCESS:
            return{
                ...state,
                quote: action.payload,
                loading: false
            }
        case KW_FAIL:
            return{
                ...state,
                loading:false
            }
        default:
            return state
    };
};