import { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

function SearchForm({ onSearch }) {
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
    <Container component="main" maxWidth="sm">
        <Typography variant="h6" gutterBottom>
            NPI Registry Search
        </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ '& .MuiTextField-root': { m: .5, width: '100%' } }}>
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
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <TextField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <TextField
            label="ZIP Code"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
          <Button type="submit">
            Search
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default SearchForm;
