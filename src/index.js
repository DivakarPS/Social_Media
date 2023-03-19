const express = require('express');
const app = express();
const router = require('./routes/index');
const { PORT } = require('./config/serverConfig');
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session')
const passportLocal = require('./config/passport_local_strategy');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const flash =require('connect-flash');
const custMware = require('./config/middleware');

app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static('./src/assets'));

app.set('view engine','ejs');
app.set('views','./src/views');


app.use(session({
    name: 'app',
    secret: 'something',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*10)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(custMware.setFlash);
app.use(passport.setAuthenticatedUser);

app.use('/',router);



app.listen(PORT , (err) => {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and listening in PORT: ${PORT}`);
})