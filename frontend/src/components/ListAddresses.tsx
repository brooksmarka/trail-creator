import { Typography, Link } from '@mui/material';

import { AddressesProps } from '../../types'

const ListAddresses = ({ addresses }: AddressesProps) => {
    function getAddressType(addressPurpose: string) {
        switch (addressPurpose) {
            case 'MAILING':
                return 'Mailing Address: ';
            case 'LOCATION':
                return 'Practice Location Address: ';
            case 'PRIMARY':
                return 'Primary Location Address: ';
            case 'SECONDARY':
                return 'Secondary Location Address: ';
            default:
                return 'Address'; // Fallback for unexpected or no address purpose specified
        }
    }
    return(
        <div>
        {addresses.map((address, idx) => {
            const addressString = `${address.address_1}, ${address.city}, ${address.state}, ${address.postal_code}, ${address.country_name}`;
            const encodedAddress = encodeURIComponent(addressString);
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
            const addressType = getAddressType(address.address_purpose);
            return (
                <Typography key={idx} variant="body2" gutterBottom>
                    {addressType} 
                    <Link href={mapsUrl} target="_blank" rel="noopener">
                        {addressString}
                    </Link>
                    <br />
                    Phone: {address.telephone_number || 'N/A'}
                </Typography>
            );
        })}
        </div>
    )

}
export default ListAddresses