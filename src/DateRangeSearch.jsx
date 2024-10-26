import React, { useState } from 'react';

const DateRangeSearch = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSearch = () => {
    if (!fromDate || !toDate) {
      alert('Please select both dates.');
      return;
    }
    if (new Date(fromDate) > new Date(toDate)) {
      alert('The "From" date cannot be later than the "To" date.');
      return;
    }
    alert(`Searching from ${fromDate} to ${toDate}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div>
        <label>From Date: </label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>
      <div>
        <label>To Date: </label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default DateRangeSearch;
