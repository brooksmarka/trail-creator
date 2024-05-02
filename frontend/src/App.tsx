import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const queryParams = new URLSearchParams({
      firstName: "",
      lastName: "",
      npiNumber: "",
      taxonomy: "",
      city: "",
      state: "",
      zip: "80215"
    }).toString();

    try {
      const response = await fetch(`http://localhost:3001/search?${queryParams}`);
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (err){
    console.error("Error fetching data", err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>NPI Search</h1>
      {data ? (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default App;
