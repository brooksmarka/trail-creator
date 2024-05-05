import { useState } from 'react'
import { ProviderData } from '../../types'
import { Typography } from '@mui/material';
import ProviderTable from './ProviderTable';
import ProviderDetail from './ProviderDetail';
interface ProviderListProps {
    data: ProviderData[];
}

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

    console.log("here is the data within providerlist", data)
    return (
        <>
            {!data || data.length === 0 ? (
                <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                    No data available
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