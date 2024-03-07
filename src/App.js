import { useEffect, useState, useMemo } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import React from 'react';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const filteredMonsters = useMemo(
    () =>
      monsters.filter((monster, idx) => {
        console.log('render');
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
      }),
    [searchField, monsters]
  );

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        onSearchChange={onTitleChange}
        placeholder='search title'
        className='monsters-search-box'
      />
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
