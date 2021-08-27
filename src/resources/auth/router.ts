import { Router } from 'express'
import { createUser } from '../user/controller'
import { loginUser, logoutUser, validateLoggedInToken } from './controller'

const router = Router()

// login

router.route('/login').post(loginUser)

router.route('/logout').get(logoutUser)

router.route('/signup').post(createUser)

router.route('/validate-token').get(validateLoggedInToken)

// logout??

export default router
