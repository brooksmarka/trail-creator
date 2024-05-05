import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import CustomTableHeader from './CustomTableHeader';
import { ProviderTableProps } from '../../types';

const ProviderTable = ({ data, handleClickOpen }: ProviderTableProps) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
				<CustomTableHeader />
			</TableHead>
			<TableBody>
				{data?.map((provider, index) => (
					<TableRow
						key={index}
						sx={{ '&:hover': { backgroundColor: '#f6f9fc' }, cursor: 'pointer' }}
						onClick={() => handleClickOpen(provider)}
					>
						<TableCell component="th" scope="row">
							{provider.basic.organization_name || `${provider.basic.first_name} ${provider.basic.last_name}`}
						</TableCell>
						<TableCell align="center">{provider.number}</TableCell>
						<TableCell align="center">
							<Typography variant="body2">
								{provider.addresses[1].address_1} {provider.addresses[1].city}, {provider.addresses[1].state} {provider.addresses[1].postal_code}
							</Typography>
						</TableCell>
						<TableCell align="center">{provider.addresses[1].telephone_number || provider.addresses[0].telephone_number}</TableCell>
						<TableCell align="center">{provider.taxonomies?.[0]?.desc || "No description available"}</TableCell>
					</TableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ProviderTable;