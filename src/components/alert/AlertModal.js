import React from 'react';

import './AlertModal.css';

export default function AlertModal(props) {


    return (
        <div className="Delete-Container">
            <div className="Delete-Modal">
                <p className="Delete-Modal-Name">{props.label}</p>
                <p className="Delete-Modal-Label">{props.name}</p>
                    <button className="Delete-Modal-button-left" onClick={() => props.Exit()}>Cancel</button>
                    <button className="Delete-Modal-button-right" onClick={() => props.toConfirm()}>Confirm</button>
            </div>
        </div>
    )
}