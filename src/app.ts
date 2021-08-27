// import _ from is what brings the @types
import express from 'express'

//import routers
import usersRouter from './resources/user/router'
import authRouter from './resources/auth/router'
import postsRouter from './resources/posts/router'
import loginAuth from './middlewares/loginAuth'

import cors from 'cors'
import { JwtPayload } from 'jsonwebtoken'

//import with require
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

declare global {
	namespace Express {
		interface Request {
			currentUser: string | JwtPayload
		}
	}
}

//create the server
const app = express()

// Routes and middlewares run from top to bottom in the order you call them herev
// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3001', credentials: true }))
// app.use((req, res, next) => {
// 	//I am receiving the token from the frontend
// 	const token = req.cookies.token
// 	// if (token) {
// 	// }
// })

// App routes
/* 
  REMINDER
  Routes and middlewares run from top to bottom in the order you call them here
*/

// This is NOT under login protection
app.use(authRouter)

// This is your gate keeper to make sure the user is logged in!
// Any route after this one will be protected by login!
app.use(loginAuth)
app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.all('*', (req, res) => {
	res.status(404).json('No route match')
})

//CONNECT THE SERVER
app.listen(3030, () => {
	console.log('The server is connected!')
})

module.exports = app
