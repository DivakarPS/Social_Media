const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig');

app.listen(PORT , (err) => {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and listening in PORT: ${PORT}`);
})