import express, { Express } from 'express';
import http from "http";
import cors from "cors";
import bodyParser from 'body-parser';
import { error } from 'console';
import router from './routes/routes';

const app: Express = express();

const server = http.createServer(app);

//Express configuration

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "http://localhost:3000");

//define routes

app.use("/api/v1", router);



//Start the server 
try {
    const port: Number = app.get("PORT");
    const baseUrl:String = app.get("BASE_URL");
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
} catch (e) {
    console.log(error);
    
}


export default server;




