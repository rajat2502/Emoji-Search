import React from 'react';

const Card = ({emoji}) => {
    return (
        <div className="card">
            <span role="img" aria-label="emoji" className="emoji">{emoji.symbol}</span>
            <span className="emoji-title">{emoji.title}</span>
            <span className="copy-emoji">copy</span>
        </div>
    )
}

export default Card;