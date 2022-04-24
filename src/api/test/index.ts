import { Router } from 'express'
import { testRoute } from './test.service'
const router = Router()

// Main endpoint
router.get('/', testRoute)

export default router