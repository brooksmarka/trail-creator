import React, { useState, useEffect } from 'react'
import './App.css'
import SearchParams from '../types.ts';
import SearchForm from './SearchForm.tsx';
import ProviderList from './ProviderList.tsx'

function App() {
  const [data, setData] = useState<any>(null);

  const handleSearch = async (searchParams: SearchParams) => {
    const filteredParams: Record<string, string> = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value !== undefined)
    );

    const queryParams = new URLSearchParams(filteredParams).toString();

    try {
      const response = await fetch(`http://localhost:3001/search?${queryParams}`);
      const jsonData = await response.json();
      console.log("this is the ddata",jsonData);
      setData(jsonData);
    } catch (err){
    console.error("Error fetching data", err)
    }
  }

  return (
    
    <div>
      <h1>NPI Search</h1>
      <SearchForm onSearch={handleSearch} />
      <ProviderList data={data?.results} />
    </div>
  );
}

export default App;
