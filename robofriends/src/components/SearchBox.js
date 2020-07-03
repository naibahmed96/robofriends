import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div>
      <input className="search-bar" type="text" placeholder="search robot" onChange={searchChange}/>
    </div>
  );
}

export default SearchBox;