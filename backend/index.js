const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/search', async (req, res) => {
    const { firstName, lastName, npiNumber, taxonomy, city, state, zip, limit, skip } = req.query;
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
                limit,
                skip: skip || 0,
                version: '2.1'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function shutdownServer(signal) {
    console.log(`${signal} received.`);
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
        process.exit(0);
    });
}

process.on('SIGTERM', () => shutdownServer('SIGTERM'));
process.on('SIGINT', () => shutdownServer('SIGINT'));