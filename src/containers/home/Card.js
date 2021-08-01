import React from 'react'
import './card.css';

function Card({val}) {
    return (
        <div className="card_container">
            <span className="task_name">{val.name}</span>
        </div>
    )
}

export default Card
