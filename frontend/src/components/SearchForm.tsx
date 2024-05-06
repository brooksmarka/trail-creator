import { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { SearchFormProps } from '../../types';


function SearchForm({ onSearch }: SearchFormProps) {

  const isValidState = (state:string) => state.length ==2 && /^[a-zA-Z]+$/.test(state);
  const isValidZip = (zip:string) => /^\d{5}(-\d{4})?$/.test(zip);
  const isValidNpiNumber = (npi:string) => /^\d{10}$/.test(npi);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    npiNumber: '',
    taxonomy: '',
    city: '',
    state: '',
    zip: ''
  });

  const [errors, setErrors] = useState({
    state: false,
    zip: false,
    npiNumber: false
  })

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Some input validations
    let error = false;
    if(value.trim() !== ''){
      if(name === 'state') error = !isValidState(value)
      else if (name ==='zip') error = !isValidZip(value)
      else if (name ==='npiNumber') error = !isValidNpiNumber(value)
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }))

  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!errors.state && !errors.zip && !errors.npiNumber) {
      onSearch(formData);
    } else {
      alert("Please correct errors in the form")
    }
    
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
            error={errors.npiNumber}
            helperText={errors.npiNumber ? "NPI Number must be 10 digits." : ""}
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
            error={errors.state}
            helperText={errors.state ? "State must be 2 letters." : ""}
          />
          <TextField
            fullWidth 
            label="ZIP Code"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            error={errors.zip}
            helperText={errors.zip ? "ZIP must be 5 digits" : ""}
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
