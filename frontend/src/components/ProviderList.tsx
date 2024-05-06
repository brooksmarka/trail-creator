import { useState } from 'react'
import { ProviderData, ProviderListProps } from '../../types'
import { Typography } from '@mui/material';
import ProviderTable from './ProviderTable';
import ProviderDetail from './ProviderDetail';

const ProviderList = ({ data }: ProviderListProps) => {
    const [open, setOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<ProviderData | null>(null)

    const handleClickOpen = (provider: ProviderData) => {
        setSelectedProvider(provider);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            {!data || data.length === 0 ? (
                <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                    No results found.  Please try your search again.<br/>
                    Note: The NPI Registry limits searches to the first 2100 results. If you cannot find the NPI that you are looking for, please refine the search.
                </Typography>
            ) : (
                <ProviderTable data={data} handleClickOpen={handleClickOpen} />
            )}

            {selectedProvider && (
             <ProviderDetail provider={selectedProvider} handleClose={handleClose} open={open}/>
            )}
        </>

    );
}

export default ProviderList;