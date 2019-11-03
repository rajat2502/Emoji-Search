import React,{ useState } from 'react';

const Input = ({handleEmoji}) => {

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        handleEmoji(e.target.value);
    };

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