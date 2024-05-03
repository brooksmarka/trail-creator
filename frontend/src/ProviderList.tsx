import React, { useState } from 'react'
import ProviderData from '../types'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, Button } from '@mui/material';
interface ProviderListProps {
    data: ProviderData[];
  }

const ProviderList: React.FC<ProviderListProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<ProviderData | null>(null)

    const handleClickOpen = (provider: ProviderData) => {
        setSelectedProvider(provider);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    console.log("here is the data within providerlist", data)
    return (
     <>
        {!data || data.length === 0 ? (
            <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                No data available
            </Typography>
        ):(
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">NPI Number</TableCell>
                <TableCell align="center">Primary Practice Address</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Primary Taxonomy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
 
              {data?.map((provider, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: '#f6f9fc' }, cursor: 'pointer' }}
                  onClick={() => handleClickOpen(provider)}
                >
                  <TableCell component="th" scope="row">
                    {provider.basic.organization_name || `${provider.basic.first_name} ${provider.basic.last_name}`}
                  </TableCell>
                  <TableCell align="center">{provider.number}</TableCell>
                  <TableCell align="center" sx={{width: '30%'}}>
                    {/* {provider.addresses.filter(address => address.address_purpose ==="MAILING").map((address, addrIndex) => ( */}
                      <Typography variant="body2">
                        {provider.addresses[1].address_1} {provider.addresses[1].city}, {provider.addresses[1].state} {provider.addresses[1].postal_code}
                      </Typography>
                    {/* ))} */}
                  </TableCell>
                  <TableCell align="center" sx={{width: '20%'}}>{provider.addresses[1].telephone_number||provider.addresses[0].telephone_number}</TableCell>
                  <TableCell align="center"sx={{width: '20%'}}>{provider.taxonomies?.[0]?.desc || "No description available"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        )}
        {selectedProvider && (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Provider Details</DialogTitle>
            <DialogContent>
            <DialogContentText>
                <Typography variant="h6">Name: {selectedProvider.basic.organization_name || `${selectedProvider.basic.first_name} ${selectedProvider.basic.last_name}`}</Typography>
                <Typography variant="subtitle1">NPI Number: {selectedProvider.number}</Typography>
                {selectedProvider.addresses.map((address, idx) => (
                <Typography key={idx} variant="body2">
                    Location: {address.city}, {address.state}
                </Typography>
                ))}
            </DialogContentText>
            </DialogContent>
            <Button onClick={handleClose} color="primary">Close</Button>
        </Dialog>
        )}
        </>

      );
}

export default ProviderList;