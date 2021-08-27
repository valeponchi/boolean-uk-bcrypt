import dbClient from '../src/utils/database'
import { datatype, image, internet, lorem, name } from 'faker'
import user, { NewUser } from '../src/resources/user/service'
const { post } = dbClient

const userFactory = (password?: string): NewUser => {
	return {
		username: internet.userName(),
		password: password || internet.password(),
		bio: lorem.sentences(2),
		role: 'user',
	}
}

const postFactory = (userCount: number) => {
	return {
		imageUrl: image.imageUrl(undefined, undefined, undefined, true),
		text: lorem.sentences(2),
		userId: datatype.number({ max: userCount, min: 1 }),
	}
}

const seed = async () => {
	const testUser = await user.createWithHash({
		...userFactory('testPassword'),
		role: 'admin',
	})

	const testUser2 = await user.createWithHash({
		...userFactory('test'),
	})
	console.log(testUser, testUser2)

	const users = await Promise.all(
		Array(3)
			.fill(0)
			.map(async () => {
				return await user.createWithHash(userFactory())
			})
	)

	console.log('Users created')

	await Promise.all(
		Array(20)
			.fill(0)
			.map(async () => {
				return await post.create({ data: postFactory(users.length) })
			})
	)

	console.log('Posts created')
}

seed()
	.catch(e => console.error(e))
	.finally(() => dbClient.$disconnect())
