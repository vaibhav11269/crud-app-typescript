import express, { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();
import bookRouter from "./routes/routes";
import connection from './dbConnect';
import cors from 'cors';

/*DB Connection */
connection();

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

app.use("/api/books/", bookRouter);

const PORT = process.env.PORT;

app.use("*", (req: Request, res: Response) => {
    res.sendStatus(204);
});

app.listen(PORT, (): void => {
    console.log(`Listening on PORT ${PORT}`);
})