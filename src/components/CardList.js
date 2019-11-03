import React, {useState, useEffect} from 'react';

import Card from './Card';

const CardList = ({emojis}) => {

    const [copiedIndex, setCopiedIndex] = useState();

    // handle copied card
    const handleCopied = (emoji, index) => {
        navigator.clipboard.writeText(emoji);
        setCopiedIndex(index);
    }

    // to set the copiedIndex to none on each search
    useEffect(() => {
        setCopiedIndex();
    }, [emojis])

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