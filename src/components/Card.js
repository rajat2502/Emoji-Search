import React from 'react';

const Card = ({emoji}) => {
    return (
        <div className="card">
            <span role="img" aria-label="emoji" className="emoji">{emoji.symbol}</span>
            <span className="emoji-title">{emoji.title}</span>
            <button className="copy-emoji">Click to copy Emoji</button>
        </div>
    )
}

export default Card;