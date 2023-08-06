"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessController = void 0;
const AccessService_1 = require("../services/AccessService");
class AccessController {
    constructor() {
        this.updateAcess = (req, res) => {
            const accessService = new AccessService_1.AccessService;
            const access = req.body;
            if (!access.description) {
                return res.status(400).json({
                    message: "Bad request! Required language."
                });
            }
            accessService.updateAccess(access.language, access.description);
            return res.status(201).json({
                message: "Access created!"
            });
        };
    }
    getAccessEN(req, res) {
        const accessService = new AccessService_1.AccessService;
        const access = accessService.getAccessEN();
        return res.status(200).json(access);
    }
    getAccessPT(req, res) {
        const accessService = new AccessService_1.AccessService;
        const access = accessService.getAccessPT();
        return res.status(200).json(access);
    }
    getAccessAll(req, res) {
        const accessService = new AccessService_1.AccessService;
        const access = accessService.getAccessAll();
        return res.status(200).json(access);
    }
}
exports.AccessController = AccessController;
