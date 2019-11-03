import React, {useState, useEffect} from 'react';

import './App.css';

import Title from './components/Title';
import Input from './components/Input';
import CardList from './components/CardList';
import filterEmoji from './components/filterEmoji';

const App = () => {

  const [emojis, setEmojis] = useState([]);

  const handleEmoji = search => {
    setEmojis(filterEmoji(search));
  }

  useEffect(() => {
    setEmojis(filterEmoji(''));
  }, [])

  return (
    <div className="App">
      <Title />
      <Input handleEmoji={handleEmoji} />
      <CardList emojis={emojis} />
    </div>
  )
}


export default App;
