"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AccessController_1 = require("./controllers/AccessController");
exports.router = (0, express_1.Router)();
// Access
const accessController = new AccessController_1.AccessController;
exports.router.put('/access', accessController.updateAcess);
// All Language
exports.router.get('/access', accessController.getAccessAll);
// English
exports.router.get('/access/en', accessController.getAccessEN);
// Portuguese
exports.router.get('access/pt', accessController.getAccessPT);
