import { Request, Response } from "express";
import Books from "../model/book";
import { addBook, findBook, updateBook, deleteBook } from "../services/books.service";


const getAllBooks = async (req: Request, res: Response) => {
    try {
        let books = await Books.find({});
        res.send(books);
    } catch (error) {
        res.status(404).send(error);
    }
};

const getBookById = async (req: Request, res: Response) => {
    try {
        let book = await findBook(req.params);
        res.status(200).send(book);
    } catch (error) {
        res.status(404).send(error);
    }
};

const createBook = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { name, author, description, price } = req.body;
        let new_book = await addBook({ name, author, description, price });
        res.status(201).send(new_book);
    } catch (error) {
        res.status(424).send(error);
    }
};

const updateRecord = async (req: Request, res: Response) => {
    try {
        let book = await updateBook(req.params, req.body, { new: true });
        res.status(200).send(book);
    } catch (error) {
        res.status(404).send(error);
    }
};
const deleteRecord = async (req: Request, res: Response) => {
    try {
        let book = await deleteBook(req.params);
        res.status(200).send(book);
    } catch (error) {
        res.status(404).send(error);
    }
};

export {
    getAllBooks,
    getBookById,
    createBook,
    updateRecord,
    deleteRecord
}