import express from 'express';
import mongoose  from 'mongoose';
import clone from './route/clone.js';
import ejs from "ejs";


const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/', async (req, res) => {
    res.render('index.ejs',{foo:'FOO'});
})

app.use(express.json()); 

app.post('/generate', async (req, res) => {
    const userText = req.body.text;

    let newTweet = new clone({
        text: userText
    });

    await newTweet.save();
    res.json({ message: "Saved!" });
});

// app.get('/twitter', (req, res) => {
    
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


let a = await mongoose.connect('mongodb://localhost:27017/clone');
