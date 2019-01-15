import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <div className="v" onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;