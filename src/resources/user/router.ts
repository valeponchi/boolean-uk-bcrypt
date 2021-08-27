import { Router } from 'express'
import adminAuth from '../../middlewares/adminAuth'
import { getAllUsers, createUser } from './controller'

const router = Router()

router.get('/', adminAuth, getAllUsers)

// router.get('/:id', getOneUser)
//when the user tries to sign up:
router.post('/', createUser)

export default router
