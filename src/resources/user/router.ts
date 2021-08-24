import { Router } from 'express'
import { createUser, getAllUsers } from './controller'

const router = Router()

router.get('/', getAllUsers)
router.post('/', createUser)

export default router
