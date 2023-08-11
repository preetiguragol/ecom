
import React, { useState } from 'react';
import './SearchBar.css';
import {BsSearch} from 'react-icons/bs'
const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='searchbar'
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className='button-styling' type="submit">Search</button>
     
    </form>
  );
};

export default SearchBar;
