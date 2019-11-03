import React, {useState} from 'react';

import Card from './Card';

const CardList = ({emojis}) => {

    const [copiedIndex, setCopiedIndex] = useState();

    const handleCopied = (emoji, index) => {
        navigator.clipboard.writeText(emoji);
        setCopiedIndex(index);
    }

    console.log(emojis);
    return (
        <div className="cardlist">
            {
                emojis.map((emoji, index) => {
                    return (
                        <Card emoji={emoji} key={index} index={index} copied={index === copiedIndex ? true : false} handleCopied={handleCopied} />
                    )
                })
            }
        </div>
    )
}

export default CardList;