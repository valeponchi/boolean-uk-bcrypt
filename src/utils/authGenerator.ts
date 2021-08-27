//this is to help me in the creation of token
//a code I can use in the whole app

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// tell ts it's going to be always a string, never undefined
const JWT_SECRET = process.env.JWT as string

export function createToken(payload: jwt.JwtPayload) {
	return jwt.sign(payload, JWT_SECRET)
}

export function validateToken(token: string) {
	return jwt.verify(token, JWT_SECRET)
}
