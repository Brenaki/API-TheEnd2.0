import { Router, Request, Response } from "express"
import { AccessController } from "./controllers/AccessController"

export const router = Router()

// Access
const accessController = new AccessController

router.put('/access', accessController.updateAcess)
// All Language
router.get('/access', accessController.getAccessAll)
// English
router.get('/access/en', accessController.getAccessEN)
// Portuguese
router.get('access/pt', accessController.getAccessPT)