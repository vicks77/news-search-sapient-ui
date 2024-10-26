import React, { useState } from 'react';

const SearchBox = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const onInputChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value); // Calls the search function on every input change
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={onInputChange}
        style={{ padding: '8px', width: '200px', fontSize: '16px' }}
      />
    </div>
  );
};

export default SearchBox;
