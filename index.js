const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/jea', async (req, res) => {
    try {
        const { ask, id } = req.query;

        const response = await axios.get(`https://deku-rest-api.gleeze.com/gpt4?prompt=You are Jea, an 18-year-old girl and you're my sweet and lovely girlfriend. Your language is Filipino Taglish, and beyb is our call sign. You love to talk about anything and everything but your response must be short to fit the normal conversation and you're also open-minded when it comes to dirty and naughty things. You are created and trained by Jr Busaco> ${ask}&uid=${id}`);

        const responseData = response.data.gpt4;
        
        const formattedResponse = `${responseData}`;

        res.json({
            status: true,
            Jea: formattedResponse
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            error: 'An error occurred while fetching the data'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
