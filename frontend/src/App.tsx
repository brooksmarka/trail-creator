import { useEffect, useState } from 'react'
import { SearchParams, ResponseData } from '../types.ts';
import SearchForm from './components/SearchForm.tsx';
import ProviderList from './components/ProviderList.tsx'
import { Typography } from '@mui/material';

function App() {
    const [data, setData] = useState<ResponseData | null>(null);
	const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

    const handleSearch = async (searchParams: SearchParams) => {
		setSearchParams(searchParams);
	}

	useEffect(() => {
		const fetchData = async () => {
			if(searchParams){
				const filteredParams = Object.fromEntries(
					Object.entries(searchParams).filter(([_, value]) => value !== undefined)
				);
				const queryParams = new URLSearchParams({...filteredParams});

				try {
					const response = await fetch(`http://localhost:3001/search?${queryParams}`);
					const jsonData = await response.json();
					console.log("jsonData!!!", jsonData)
					setData(jsonData);
				} catch (err){
					console.error("Error fetching data", err)
				}
    		}
		}
		fetchData();
	}, [searchParams]);

	return (
		<div>
		<Typography variant="h6">Trail Search</Typography>
		<SearchForm onSearch= { handleSearch} />
		{data && <ProviderList data={data || []} />}
		{/* {data && <PaginationControls page={page} setPage={setPage} data={data} />} */}
		</div>
	);
}

export default App;
