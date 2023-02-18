import mongoose, { Schema, model, Document } from "mongoose";

export interface BookDocument extends Document {
    name: string,
    author: string,
    description: string,
    price: number
}

interface Book {
    name: string,
    author: string,
    description: string,
    price: number
}

let bookSchema = new Schema<Book>({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Books = model<Book>("books", bookSchema);

export default Books;