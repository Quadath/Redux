import React from "react";
import { connect } from "react-redux";

import * as actions from '../actions';


const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <>
            <h1 id="counter">{counter}</h1>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={rnd} className="btn btn-secondary">RND</button>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);