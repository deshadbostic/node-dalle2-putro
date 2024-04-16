const PORT = 8000
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path: '../.env'});
   console.log("development");
    
  }
// config API

const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

// route to image

app.post('/images', async (req, res) => {
    //test with sending a dummy image
   // res.json({ url:"https://upload.wikimedia.org/wikipedia/commons/4/47/VU-Banana-1000x1000.png"})
    try {
        const response = await openai.createImage({
            model:"dall-e-3",
            prompt: req.body.message,
            n: 1,
            size: "1792x1024",
        
        });
        console.log(response)
        res.send(response.data.data[0]);
        
    } catch (error) {
        console.log(error);
    }

    
})

app.listen(PORT, () => console.log("Server running on port "+ PORT))
