import express, { Request, Response } from "express";
import bookRouter from "./routes/routes";
import cors from 'cors';
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import dotenv from 'dotenv';
dotenv.config();

/*Swagger Configuration*/
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CRUD API DOCS",
            version: "1.0.0"
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ],
    },
    apis: ["./src/routes/*.ts"]
}
const specs = swaggerJSDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
/* Middlewares */
app.use(cors());
app.use(express.json());

app.use("/api/books/", bookRouter);

app.use("*", (req: Request, res: Response) => {
    res.sendStatus(204);
});


export default app;