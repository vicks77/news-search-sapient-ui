import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the async function inside the useEffect to handle the request
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/news/search?keyword= ');
        console.log(response.json)
        setData(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.author}><br></br>
            {item.description}
            {item.author}<br></br>
            </li>

        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
