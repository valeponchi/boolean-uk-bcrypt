import { Router } from 'express'
import { getAllPosts, createPost } from './controller'

const router = Router()

router.get('/', getAllPosts)
router.post('/', createPost)

export default router
