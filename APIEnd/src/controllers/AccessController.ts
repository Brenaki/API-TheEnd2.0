import { Request, Response } from "express"
import { AccessService } from "../services/AccessService"

export class AccessController{
    updateAcess = (req: Request, res: Response) => {
        const accessService = new AccessService
        const access = req.body

        if(!access.description) {
            return res.status(400).json({
                message: "Bad request! Required language."
            })
        }

        accessService.updateAccess(access.language, access.description)
        return res.status(201).json({
            message: "Access created!"
        })
    }

    getAccessEN(req: Request, res: Response) {
        const accessService = new AccessService
        const access = accessService.getAccessEN()
        return res.status(200).json( access )
    }

    getAccessPT(req: Request, res: Response) {
        const accessService = new AccessService
        const access = accessService.getAccessPT()
        return res.status(200).json( access )
    }

    getAccessAll(req: Request, res: Response) {
        const accessService = new AccessService
        const access = accessService.getAccessAll()
        return res.status(200).json( access )
    }
}