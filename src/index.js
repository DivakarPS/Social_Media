const express = require('express');
const app = express();
const router = require('./routes/index');
const { PORT } = require('./config/serverConfig');


app.use('/',router);



app.listen(PORT , (err) => {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and listening in PORT: ${PORT}`);
})