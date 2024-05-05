import { TableCell, TableRow, Typography } from '@mui/material';

const CustomTableHeader = () => {
  return (
	<TableRow>
		<TableCell>
			<Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
				Name
			</Typography>
		</TableCell>
		<TableCell align="center">
			<Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
				NPI Number
			</Typography>
	  	</TableCell>
	  	<TableCell align="center">
			<Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
		  		Primary Practice Address
			</Typography>
	  	</TableCell>
	  	<TableCell align="center">
			<Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
		  		Phone
			</Typography>
	  	</TableCell>
		<TableCell align="center">
			<Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
				Primary Taxonomy
			</Typography>
		</TableCell>
	</TableRow>
  );
};

export default CustomTableHeader;
