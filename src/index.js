const express = require('express');
const app = express();
const router = require('./routes/index');
const { PORT } = require('./config/serverConfig');
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

app.use(express.urlencoded());
app.use(expressLayouts);
app.use(express.static('./src/assets'));

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/',router);



app.listen(PORT , (err) => {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and listening in PORT: ${PORT}`);
})