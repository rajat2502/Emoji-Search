import React from 'react';

import Card from './Card';

const CardList = ({emojis}) => {

    console.log(emojis);
    return (
        <div className="cardlist">
            {
                emojis.map(emoji => {
                    return (
                        <Card emoji={emoji} />
                    )
                })
            }
        </div>
    )
}

export default CardList;