const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/search', async (req, res) => {
    const { name, manager, outFields, outSR, f } = req.query;

    console.log("Name", name)
    console.log("req query", req.query)
    const url = 'https://services5.arcgis.com/ttNGmDvKQA7oeDQ3/ArcGIS/rest/services/CPWAdminData/FeatureServer/15/query';

    const where = `name='${name}' AND manager='${manager}'`;
    try {
        const response = await axios.get(url, {
            params: {
                where,
                outFields: outFields || '*',
                outSR: outSR || '4326',
                f: f || 'json'
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