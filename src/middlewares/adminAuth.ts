import { User } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
	const { role } = req.currentUser as User
	if (role === 'admin') {
		next()
	} else {
		res.status(403).json({ error: "You're not an admin!" })
	}
}
