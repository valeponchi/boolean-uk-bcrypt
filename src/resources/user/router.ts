import { Router } from 'express'
import { createUser, getAllUsers } from './controller'

const router = Router()

router.get('/', getAllUsers)
//when the user tries to sign up:
router.post('/', createUser)

export default router
