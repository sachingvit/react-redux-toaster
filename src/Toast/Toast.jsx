import React from 'react';

const ToastComponent = props => {



    return (
        <div className="toast-card" style={{ left: '10px', transition: "all 1.5s ease-in-out" }}>
            <span className="message">{props.message}</span>
            <span className="remove-icon" onClick={() => props.remove(props.index)}> X </span>
        </div>
    )
}

export default ToastComponent;