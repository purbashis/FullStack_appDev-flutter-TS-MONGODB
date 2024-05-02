"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const console_1 = require("console");
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
//Express configuration
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "http://localhost:3000");
//define routes
app.use("/api/v1", routes_1.default);
//Start the server 
try {
    const port = app.get("PORT");
    const baseUrl = app.get("BASE_URL");
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
catch (e) {
    console.log(console_1.error);
}
exports.default = server;
