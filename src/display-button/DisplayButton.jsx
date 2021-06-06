import React from 'react';

export default function DisplayButton(props) {
    return (
        <div>
            <button>{props.value}</button>
        </div>
    );
}