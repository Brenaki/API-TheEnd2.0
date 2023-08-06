"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
// Call funtion express to start the server
const app = (0, express_1.default)();
// Use the json to returns in the pages
app.use(express_1.default.json());
// Use the router
app.use(routes_1.router);
// Home
app.get('/', (req, res) => {
    return res.status(200).json({
        'English': 'Welcome to API of The End!',
        'Portugues': 'Bem-vindo a API do Fim!'
    });
});
// Message from the server is ON
app.listen(5000, () => console.log('Server is ON'));
