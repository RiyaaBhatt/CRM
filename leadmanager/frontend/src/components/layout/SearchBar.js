import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Add your search logic here
  };

  return (
    <Form className="d-flex align-items-center search-bar" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Search"
        className="search-input"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <button type="submit" className="search-btn">
        <FaSearch size={24} />
      </button> */}
    </Form>
  );
};

export default SearchBar;
