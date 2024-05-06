import { Typography } from '@mui/material';
import { EndpointProps } from '../../types'

const ListEndpoints = ({ endpoints }: EndpointProps) => {
    return(
        <div>
            {endpoints.map((endpoint, idx) => (
                <div key={idx}>
                    <Typography variant="h6" gutterBottom>
                        Endpoint {idx + 1} Details
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Endpoint Type: {endpoint.endpointType} - {endpoint.endpointTypeDescription}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Endpoint: {endpoint.endpoint}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Endpoint Description: {endpoint.endpointDescription}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Use: {endpoint.use} - {endpoint.useDescription}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Content Type: {endpoint.contentType} - {endpoint.contentTypeDescription}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Affiliation: {endpoint.affiliation}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Endpoint Location: {endpoint.address_1} {endpoint.address_2}, {endpoint.city}, {endpoint.state}, {endpoint.postal_code}, {endpoint.country_name || endpoint.country_code}
                    </Typography>
                </div>
            ))}
        </div>
    )

}
export default ListEndpoints