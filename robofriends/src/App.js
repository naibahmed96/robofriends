import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

const App = () => {
  return (
    <div className="center">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}

export default App;