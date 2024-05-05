import { useState } from 'react'
import './App.css'
import { SearchParams } from '../types.ts';
import SearchForm from './components/SearchForm.tsx';
import ProviderList from './components/ProviderList.tsx'
import { Typography } from '@mui/material';
import { ResponseData } from '../types';

function App() {
    const [data, setData] = useState<ResponseData | null>(null);

    const handleSearch = async (searchParams: SearchParams) => {
		const filteredParams = Object.fromEntries(
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
      <Typography variant="h6">NPI Search App</Typography>
      <SearchForm onSearch={handleSearch} />
      <ProviderList data={data?.results || []} />
    </div>
  );
}

export default App;
