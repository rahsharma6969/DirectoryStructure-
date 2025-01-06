import express from 'express';
import { connectDB } from './config/dbConfig.js';
import apiRouter  from './routes/apiRouter.js';

const app = express();
const PORT =  3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.get('/ping', (req, res) =>{
    res.send('ping')
})

app.use('/api', apiRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})