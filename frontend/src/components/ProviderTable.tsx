import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { TrailTableProps } from '../../types';


const ProviderTable = ({ data, handleClickOpen }: TrailTableProps) => {
    console.log('data', data);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Manager</TableCell>
                        <TableCell>Coordinates</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.features.map((feature, featureIndex) => (
                        <TableRow
                            key={featureIndex}
                            sx={{ '&:hover': { backgroundColor: '#f6f9fc' }, cursor: 'pointer' }}
                            //onClick={() => handleClickOpen(feature)}
                        >
                            <TableCell component="th" scope="row">
                                {feature.attributes.name}
                            </TableCell>
                            <TableCell align="center">
                                {feature.attributes.manager}
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="body2">
									{JSON.stringify(feature.geometry.paths[0])}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProviderTable;
