import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import Books, { BookDocument } from "../model/book";

const addBook = (book: DocumentDefinition<BookDocument>) => {
    return Books.create(book);
}

const findBook = (query: FilterQuery<BookDocument>, options: QueryOptions = { lean: true }) => {
    return Books.find(query, {}, options);
}

const updateBook = (query: FilterQuery<BookDocument>, update: UpdateQuery<BookDocument>, options: QueryOptions) => {
    return Books.findOneAndUpdate(query, update, options);
}

const deleteBook = (query: FilterQuery<BookDocument>) => {
    return Books.findOneAndDelete(query);
}

export {
    addBook,
    findBook,
    updateBook,
    deleteBook
}