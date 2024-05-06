import { Typography, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import ListAddresses from './ListAddresses';
import ListEndpoints from './ListEndpoints';
import { ProviderDetailProps } from '../../types'


const ProviderDetail = ({ provider, handleClose, open}: ProviderDetailProps) => {
    return(
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg'>
            <DialogTitle>Provider Details</DialogTitle>
            <DialogContent>
                    <Typography variant="h6">Name: {provider.basic.organization_name || `${provider.basic.first_name} ${provider.basic.last_name}`}</Typography>
                    <Typography variant="subtitle1">NPI Number: {provider.number}</Typography>
                    <Typography variant="subtitle1">NPI Type: {provider.enumeration_type}</Typography>
                    <Typography variant="subtitle1">Status: {provider.basic.status === 'A'? 'Active' : 'Inactive'}</Typography>
                    <Typography variant="subtitle1">
                        Organization Subpart: {provider.basic.organizational_subpart}
                    </Typography>
                    <Typography variant="subtitle1">
                    	Last Updated: {provider.basic.last_updated || 'N/A'}
                    </Typography>
                    <Typography variant="subtitle1">
                        Certification Date: {provider.basic.certification_date || 'N/A'}
                    </Typography>
                    <Typography variant="subtitle1">
                        Enumeration Date: {provider.basic.enumeration_date || 'N/A'}
                    </Typography>
                    <Typography variant ="h6">
                        Addresses
                    </Typography>
                    <ListAddresses addresses = {provider.addresses} />
                    <Typography variant="h6">
                        Secondary Addresses
                    </Typography>
                    <ListAddresses addresses={provider.practiceLocations} /> 
                    <Typography variant="h6">
                        Authorized Official Information
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Name: {provider.basic.authorized_official_first_name} {provider.basic.authorized_official_last_name}
                        <br />
                        Title: {provider.basic.authorized_official_title_or_position}
                        <br />
                        Phone: {provider.basic.authorized_official_telephone_number}
                    </Typography>
					<Typography variant="h6">Health Information Exchange</Typography>
					<ListEndpoints endpoints={provider.endpoints}/>
					<Typography variant="h6">
                        Other Identifiers
                    </Typography>
                    {provider.identifiers.map((id, idx) => (
                        <Typography key={idx} variant="body2" gutterBottom>
                            {id.desc} {id.code}: {id.identifier}
                            {id.state ? ` - State: ${id.state}` : ''}
                        </Typography>
                    ))}
                    <Typography variant="h6">
                        Taxonomy
                    </Typography>
                    {provider.taxonomies?.map((taxonomy, idx) => (
                        <Typography key={idx} variant="body2">
                            {taxonomy.primary && `- Primary: Yes`}
                            {taxonomy.state && ` - State: ${taxonomy.state}`}
                            {taxonomy.license && ` - License: ${taxonomy.license}`}
                            {taxonomy.taxonomy_group && ` - Selected Taxonomy: ${taxonomy.taxonomy_group}`}
                            {taxonomy.code && ` ${taxonomy.code} - ${taxonomy.desc}`}
                        </Typography>
                    ))}
            </DialogContent>
            <Button onClick={handleClose} color="primary">Close</Button>
        </Dialog>
    )
}

export default ProviderDetail;