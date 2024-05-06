import { useEffect, useState } from 'react'
import { SearchParams, ResponseData } from '../types.ts';
import SearchForm from './components/SearchForm.tsx';
import ProviderList from './components/ProviderList.tsx'
import PaginationControls from './components/PaginationControls.tsx'
import { Typography } from '@mui/material';

function App() {
    const [data, setData] = useState<ResponseData | null>(null);
	const [page, setPage] = useState(0);
	const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

    const handleSearch = async (searchParams: SearchParams) => {
		setSearchParams(searchParams);
		setPage(0);
	}

	useEffect(() => {
		const fetchData = async () => {
			if(searchParams){
				const filteredParams = Object.fromEntries(
					Object.entries(searchParams).filter(([_, value]) => value !== undefined)
				);

				const limit = 50;
				const skip = page * limit;
				const queryParams = new URLSearchParams({...filteredParams, limit: limit.toString(), skip: skip.toString()}).toString();

				try {
					const response = await fetch(`http://localhost:3001/search?${queryParams}`);
					const jsonData = await response.json();
					setData(jsonData);
				} catch (err){
					console.error("Error fetching data", err)
				}
    		}
		}
		fetchData();
	}, [page, searchParams]);

	return (
		<div>
		<Typography variant="h6">NPI Search App</Typography>
		<SearchForm onSearch= { handleSearch} />
		{data && <ProviderList data={data.results || []} />}
		{data && <PaginationControls page={page} setPage={setPage} data={data} />}
		</div>
	);
}

export default App;
