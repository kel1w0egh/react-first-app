import React from 'react';
import '../App.css';

export default function IncrementButton(props) {

    const btnClick = () => {
        props.onClickAlt(props.valueOperation);
    }

    return (
        <div>
            <button onClick={btnClick}>Увеличить на {props.valueOperation}</button>
        </div>
    );
}