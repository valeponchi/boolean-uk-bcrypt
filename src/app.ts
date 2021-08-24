import express from 'express'
import usersRouter from './resources/user/router'
import authRouter from './resources/auth/router'
// import cors from "cors"
const cors = require('cors')

const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
// app.options("*", cors())

// App routes

app.use(authRouter)

app.use('/users', usersRouter)

app.all('*', (req, res) => {
	res.status(404).json('No route match')
})

//CONNECT THE SERVER
app.listen(4000, () => {
	console.log('The server is connected!')
})

module.exports = app
