import React from 'react';

import Card from './Card';

const CardList = ({emojis}) => {

    console.log(emojis);
    return (
        <div className="cardlist">
            {
                emojis.map((emoji, index) => {
                    return (
                        <Card emoji={emoji} key={index} />
                    )
                })
            }
        </div>
    )
}

export default CardList;