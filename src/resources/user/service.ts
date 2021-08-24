// this is what we use betwen prisma module and controller to extend the prisma-model functionality
import dbClient from '../../utils/database'
import { User } from '@prisma/client'
import { hash } from 'bcrypt'

//this could have been just "create"
// we want to put this create into the dbClient to use it in the controller
// when creating a user and hash the pw
const createWithHash = async (newUser: User) => {
	// grab user plaintext password
	const plaintext = newUser.password

	// Hash it using bcrypt. It will return a PROMISE!!!!
	const hashedPassword = await hash(plaintext, 10)

	// Make sure to save the hashed password!
	const savedUser = await dbClient.user.create({
		data: { ...newUser, password: hashedPassword },
	})

	return savedUser
}

const userClient = {
	...dbClient.user,
	createWithHash,
}

// const userClient = {
// 	...dbClient.user,
// 	create
// }

export default userClient
