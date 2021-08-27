import { Request, Response } from 'express'
// I'm importing from service my patched version of prisma model
import userClient from './service'
import { createToken } from '../../utils/authGenerator'

//GET ALL
export const getAllUsers = async (req: Request, res: Response) => {
	const allUsers = await userClient.findMany()

	res.json({ data: allUsers })
}

// GET ONE
// export async function getOneUser(req: Request, res: Response) {
// 	const id = req.params

// 	const oneUser = await userClient.findUnique({
// 		where: { id: parseInt(id) } })
//  res.json( { data: oneUser})
// }

//CREATE ONE
//we hash the password here
export const createUser = async (req: Request, res: Response) => {
	const newUser = req.body
	// This is my modified create version, with the password hashing!
	const savedUser = await userClient.createWithHash(newUser)

	const token = createToken({ id: savedUser.id, username: savedUser.username })
	//sending token to frontend but not available in browser/js
	// in the frontend-fetch=options you have to write credentional: include
	res.cookie('token', token, { httpOnly: true })

	res.json({ data: { savedUser: savedUser.username, bio: savedUser.bio } })
}
