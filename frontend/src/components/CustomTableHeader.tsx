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
				Manager
			</Typography>
	  	</TableCell>
	  	<TableCell align="center">
			<Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
		  		Coordinates
			</Typography>
	  	</TableCell>
	</TableRow>
  );
};

export default CustomTableHeader;
