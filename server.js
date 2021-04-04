const path = require('path');
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const passport = require('passport');
const fileupload = require("express-fileupload");
const connectDB = require('./server/config/dbconfig');

dotenv.config({ path: './server/config/config.env' });
const app = express();

app.use(express.json());
app.use(cors())
app.use(helmet());
app.use(fileupload());

//express session middleware
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 60 * 600000
    }    
  })
);

/* passport */
app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(passport);

app.use('/server/images', express.static(__dirname + '/server/images'));
app.use('/api/users', require('./server/routes/api/user'));
app.use('/api/auths', require('./server/routes/api/auth'));
app.use('/api/socalAuths', require('./server/routes/api/socialAuth'));
app.use('/api/profiles', require('./server/routes/api/profile'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});

}
const PORT = process.env.PORT || 5600;
app.listen(PORT, () => {  
  connectDB();
  console.log(`Server started on port ${PORT}`);
});