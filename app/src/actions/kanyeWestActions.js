import axios from 'axios';

export const KW_LOAD = 'KW_LOAD';
export const KW_SUCCESS = 'KW_SUCCESS';
export const KW_FAIL = 'KW_FAIL'

export const getKanyeQuote = () => (dispatch) => {

dispatch({type: KW_LOAD});
axios.get('https://api.kanye.rest/')
.then(res => {
    console.log(res)
    dispatch({type: KW_SUCCESS, payload: res.data.quote})
})
.catch(err => dispatch({type: KW_FAIL, payload: err}));


};