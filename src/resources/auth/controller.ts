import { Request, Response } from 'express'
import { User } from '@prisma/client'
import { findUserWithValidation } from './service'

export const loginUser = async (req: Request, res: Response) => {
	//  Get user credentials
	const userCreds: User = req.body

	try {
		// Check if credentials are valid
		const loggedUser = await findUserWithValidation(userCreds)
		// handle result
		res.json({ user: { id: loggedUser.id, username: loggedUser.username } })
	} catch (error) {
		res.status(401).json({ error: error.message })
	}
}
