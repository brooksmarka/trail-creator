import { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { SearchFormProps } from '../../types';


function SearchForm({ onSearch }: SearchFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    npiNumber: '',
    taxonomy: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    onSearch(formData);
  };

  return (
    <Container component="main" maxWidth="sm" >
        <Typography variant="h6" gutterBottom>
            Search the NPI Registry
        </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ '& .MuiTextField-root': { m: .5, width: '100%' },display: 'flex', flexDirection: 'column', }}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            label="NPI Number"
            name="npiNumber"
            value={formData.npiNumber}
            onChange={handleChange}
          />
          <TextField
            label="Taxonomy Description"
            name="taxonomy"
            value={formData.taxonomy}
            onChange={handleChange}
          />
          <TextField
            fullWidth 
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <TextField
            fullWidth 
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <TextField
            fullWidth 
            label="ZIP Code"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
          <Button fullWidth sx={{mt:1, ml:.5}} type="submit" variant="contained" >
            Search
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default SearchForm;
