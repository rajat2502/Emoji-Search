import React,{ useState, useEffect } from 'react';

const Input = ({handleEmoji}) => {

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        handleEmoji(e.target.value);
    };

    // useEffect(() => {
    //     handleEmoji(filterEmoji(''))
    // }, [])

    return (
            <div className="input-search">
              <input 
                type="text"
                name="search"
                value={search}
                placeholder="Search Emojis"
                onChange={handleSearch}
                />
            </div>
    )
}

export default Input;