import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';
import './NavBar.css';



const Navbar = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Perform the search based on the query and update the searchResults state.
    // You can use an API call or search through an array, depending on your use case.
    // For simplicity, let's just update the state with some dummy data.
    setSearchResults([
     
      // Add more results based on your search logic...
    ]);
  };
  return (
    <div>
    <nav className="navbar">
      <h1 className='heading'>StyleUp</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    <ul className="nav-links">
      
      <li>
        <Link to="/Home" className="nav-link">HOME</Link>
        {/* <TiHome className="home-link" to="/Home"></TiHome> */}
      </li>
      <li>
        <Link to="/Men" className="nav-link">MEN</Link>
      </li>
      <li>
        <Link to="/Women" className="nav-link">WOMEN</Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">ABOUT</Link>
      </li>
      <li>
        <Link to="/" className="nav-link">LOG OUT</Link>
      </li>
     
    </ul>
   
  </nav>
  
  
  </div>
  
 
  );
};

export default Navbar;