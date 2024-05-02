import React from 'react'
import ProviderListProps from '../types'
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ProviderList: React.FC<ProviderListProps> = ({ data }) => {
    console.log("here is the data within providerlist", data)
    return (
        <Grid container spacing={2}>
      {data?.map((provider, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card raised>
            <CardContent>
              <Typography variant="h6" component="div">
                {provider.basic.first_name} {provider.basic.last_name}
              </Typography>
              <Typography color="textSecondary">
                NPI Number: {provider.number}
              </Typography>
              {provider.addresses.map((address, addrIndex) => (
                <Typography variant="body2" key={addrIndex}>
                  Location: {address.city}, {address.state}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    );
}

export default ProviderList;