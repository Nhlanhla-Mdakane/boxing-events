const express = require('express');
const app = express();

const deleteEvent= require('./routes/delete.js');
const authRoutes = require('./routes/auth.js');
const addEvent = require('./routes/add.js');
const update = require('./routes/update.js');

const home= require('./routes/home.js');

const passportSetup = require('./config/passport');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const mongoose = require('mongoose');

const helmet=require("helmet");




app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());



mongoose.connect(keys.mongoDB.dbURI, () => {
  console.log('Connected to MongoDb');
})

app.use(authRoutes);

app.use(home);

app.use(addEvent);
app.use(update);
app.use(deleteEvent);
app.use(helmet());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

if (process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(_dirname,'frontend/buld')));
  app.get('*',(req,res)=>{res.sendFile(path.resolve(_dirname,'frontend','build','index.html'));})

}
