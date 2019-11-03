import React from 'react';

const Card = ({emoji, index, copied, handleCopied}) => {

    const handleCopy = () => {
        handleCopied(emoji.symbol, index);
    }

    return (
        <div className="card">
            <span role="img" aria-label="emoji" className="emoji">{emoji.symbol}</span>
            <span className="emoji-title">{emoji.title}</span>
            <button className="copy-emoji" onClick={handleCopy}>{!copied ? 'Click to copy Emoji' : 'Emoji Copied!!!'}</button>
        </div>
    )
}

export default Card;