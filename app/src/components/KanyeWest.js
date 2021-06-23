import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {getKanyeQuote} from '../actions/kanyeWestActions';

const Yeezus = (props) => {

    useEffect(() => {
        props.getKanyeQuote()
    }, []);



if(props.loading) {
    return <h2> Loading...</h2>
};
return(
<div>

<h1> Yeezy Taught me.... {props.quote}</h1>
<button onClick = {()=> props.getKanyeQuote()}> Get Knowledge</button>

</div>
)
};

const mapStateToProps = state => {
    console.log(state);
    return {
        quote: state.quote,
        loading: state.loading
    }
};

const mapDispatchToProps = {getKanyeQuote}


export default connect(mapStateToProps, mapDispatchToProps)(Yeezus);