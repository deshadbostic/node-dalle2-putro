const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())


// config API

const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: process.env.API_KEY,
    });
    const openai = new OpenAIApi(configuration);

// route to image

app.post('/images', async (req, res) => {

    
    try {
        const response = await openai.createImage({
            prompt: "A cute baby sea otter",
            n: 2,
            size: "1024x1024",
        
        });
        console.log(response)
        res.send(response.data.data);
        
    } catch (error) {
        console.log(error);
    }

    
})

app.listen(PORT, () => console.log("Server running on port "+ PORT))
