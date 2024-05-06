import { Button } from "@mui/material"
import { PaginationProps } from '../../types'

const PaginationControls = ({setPage, data, page}: PaginationProps) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
		<Button sx={{ display:'flex', justifyContent:'flex-start' }}onClick={() => setPage((prev) => Math.max(0, prev - 1))} disabled={page === 0}>
			Previous
		</Button>
		<Button sx={{ display:'flex', justifyContent:'flex-end' }} onClick={() => setPage((prev) => prev + 1)} disabled={data?.results && data.results.length < 50}>
			Next
		</Button>
	</div>
	)
}

export default PaginationControls;