// NewsSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const NewsSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [interval, setInterval] = useState('hours');
  const [n, setN] = useState(12);
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/news/search', {
        params: { keyword, interval, n },
      });
      setResults(response.data.articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>News Search</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Enter keyword (e.g., apple)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <br />

      {/* Interval Dropdown */}
      <label>
        Interval:
        <select value={interval} onChange={(e) => setInterval(e.target.value)}>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
      </label>
      <br />

      {/* N Input */}
      <label>
        N:
        <input
          type="number"
          min="1"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
      </label>
      <br />

      {/* Search Button */}
      <button onClick={handleSearch}>Search News</button>

      {/* Results Section */}
      <div style={{ marginTop: '20px' }}>
        <h2>Search Results:</h2>
        {results ? (
          results.length > 0 ? (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {results.map((article, index) => (
                <li key={index} style={{ marginBottom: '15px', textAlign: 'left' }}>
                  <h3>{article.title}</h3>
                  <h3>{article.publishedAt}
                  </h3>
                  <p>{article.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )
        ) : (
          <p>Enter a keyword and click "Search News" to see results.</p>
        )}
      </div>
    </div>
  );
};

export default NewsSearch;
