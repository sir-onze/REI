const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const dotenv = require('dotenv');
var app = express()

// Route requires
const user = require('./routes/user')
const event = require('./routes/event')
const album = require('./routes/album')
const post = require('./routes/post')
const coment = require('./routes/coment')

const file_path = '/Users/macz/Desktop/Social/SocialNetwork/backend/files'
var cors = require('cors')

dotenv.config();
app.use(cors());

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Routes
app.use('/api/user', user)
app.use('/api/events', event)
app.use('/api/album', album)
app.use('/api/posts',post)
app.use('/files', express.static(file_path));
app.use('/api/coment', coment)
module.exports = app;