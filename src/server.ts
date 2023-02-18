import express, { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();
import bookRouter from "./routes/routes";
import connection from './dbConnect';
import cors from 'cors';
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3000;
/*DB Connection */
connection();

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

app.listen(PORT, (): void => {
    console.log(`Listening on PORT ${PORT}`);
})