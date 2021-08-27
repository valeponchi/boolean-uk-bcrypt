import { Request, Response } from 'express'
import { User } from '@prisma/client'
import { findUserWithValidation, findUnique } from './service'
import { createToken, validateToken } from '../../utils/authGenerator'

export const loginUser = async (req: Request, res: Response) => {
	//  Get user credentials
	const userCreds: User = req.body

	try {
		// Check if credentials are valid
		const loggedUser = await findUserWithValidation(userCreds)
		// handle result

		// create token, this will be the user Passport
		const token = createToken({
			id: loggedUser.id,
			role: loggedUser.role,
		})

		// This will create a cookie with the token that cannot be acces by JS in the frontend
		// httpOnly: true
		res.cookie('token', token, { httpOnly: true })

		res.json({ user: { iusername: loggedUser.username } })
	} catch (error) {
		res.status(401).json({ error: error.message })
	}
}

export async function logoutUser(req: Request, res: Response) {
	res.clearCookie('token')
	res.json({ msg: "You've been succesfully logged out", data: null })
}

export async function validateLoggedInToken(req: Request, res: Response) {
	const token = req.cookies.token

	const tokenPayload =
		token && (validateToken(token) as { id: string; role: string })

	if (tokenPayload) {
		const userData = await findUnique({
			where: {
				id: parseInt(tokenPayload.id),
			},
			select: {
				username: true,
			},
		})

		res.json({ data: userData })
	} else {
		res.status(401).json({ err: 'No valid token was found' })
	}
}
