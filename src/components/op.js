import React from 'react';
import './op.css';

const op = (props) => {
    return (
        <div className="div">
            <button className={props.st} onClick={props.Click}>{props.name}</button>
        </div>
    )
};

export default op;