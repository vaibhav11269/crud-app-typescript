import express from "express";
import { createBook, deleteRecord, getAllBooks, getBookById, updateRecord } from "../controllers/controller";
const router = express.Router();


router.get('/:_id', getBookById);

/**
 * @swagger
 * /:
 *  get:
 *      summary:This enpoint return all availabel books
 *      description:This enpoint return all availabel books
 *      responses:
 *          200:
 *              description:To test GET method
 */
router.get("/", getAllBooks);

router.post('/new', createBook);

router.put('/:_id', updateRecord);

router.delete("/:_id", deleteRecord);

export default router;