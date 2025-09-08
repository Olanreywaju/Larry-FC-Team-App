const express = require ('express');
const PORT = 4545;
const db = process.env.DATABADE_URI

const app = express();
app.use(express.json());

const router = require('./routers/playerRouter')

require ('dotenv').config();

const mongoose = require('mongoose')

app.use('/api/v1',router);

mongoose.connect(process.env.db).then(()=>{
    console.log("db connected succcesfully");
    
    app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`);
 })
}) .catch ((error)=>{
    console.log('unable to connect to db due to'+error);
});