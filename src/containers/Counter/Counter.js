import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" 
                clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" 
                clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" 
                clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" 
                clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResult.map(strResult => (
                        <li key={strResult.id} onClick=
                        {
                            () => this.props.onDeleteResult(strResult.id)
                        } >
                        {strResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResult: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter:() => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter:() => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter:() => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter:() => dispatch({type: actionTypes.SUBTRACT}),
        onStoreResult:() => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({
            type: actionTypes.DELETE_RESULT,
            resultElId: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);