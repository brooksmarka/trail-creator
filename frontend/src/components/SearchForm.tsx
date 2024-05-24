import { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { SearchFormProps } from '../../types';


function SearchForm({ onSearch }: SearchFormProps) {

  const [formData, setFormData] = useState({
    name: '',
    manager: '',
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
            Search Trails
        </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ '& .MuiTextField-root': { m: .5, width: '100%' },display: 'flex', flexDirection: 'column', }}>
          <TextField
            label="Trail Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Managing Authority (Jefferson County Open Space Parks and Trails, Boulder County Parks & Open Space, etc)"
            name="manager"
            value={formData.manager}
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
