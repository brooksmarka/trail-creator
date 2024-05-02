const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Route to handle NPI searches
app.get('/search', async (req, res) => {
    const { firstName, lastName, npiNumber, taxonomy, city, state, zip } = req.query;
    const url = 'https://npiregistry.cms.hhs.gov/api/'
    try {
        const response = await axios.get(url, {
            params: {
                first_name: firstName,
                last_name: lastName,
                number: npiNumber,
                taxonomy_description: taxonomy,
                city,
                state,
                postal_code: zip,
                version: '2.1'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));