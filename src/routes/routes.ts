import express from "express";
import { createBook, deleteRecord, getAllBooks, getBookById, updateRecord } from "../controllers/controller";
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *          type: object
 *          required:
 *              - name
 *              - author
 *              - description
 *              - price
 *          properties:
 *              id:
 *                  type: stirng
 *                  description: Auto generated id of the book
 *              name:
 *                  type: string
 *                  description: The book name
 *              author:
 *                  type: string
 *                  description: Author Name
 *              description:
 *                  type: string
 *                  description: Book summary
 *              price:
 *                  type: number
 *                  description: Book Cost
 *          example: 
 *              id: test31213
 *              name: Book
 *              author: Test
 *              description: Book summary
 *              price: 200
 */

/**
 * @swagger
 * /api/books/:
 *      get:
 *          summary: Returns the list of all the books
 *          tags: [Books]
 *          responses:
 *              200:
 *                  description: The list of available books
 *                  content:
 *                      application/json:
 *                          scehma:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Book' 
 * 
 */
router.get("/", getAllBooks);

/**
 * @swagger
 * /api/books/{_id}:
 *      get:
 *          summary: Returns the book by ID
 *          tags: [Books]
 *          parameters:
 *              -   in: path
 *                  name: _id
 *                  schemas:
 *                      type: string
 *                      required: true
 *                      description: Book ID
 *          responses:
 *              200:
 *                  description: The book description by ID
 *                  content:
 *                      application/json:
 *                          scehma:
 *                              $ref: '#/components/schemas/Book'
 *              404:
 *                  description: The book was not found 
 * 
 */

router.get('/:_id', getBookById);


/**
 * @swagger
 * /api/books/new/:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       424:
 *         description: Not able to cretae document at the momnet
 */
router.post('/new', createBook);

/**
 * @swagger
 * /api/books/{_id}:
 *  put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 */
router.put('/:_id', updateRecord);

/**
 * @swagger
 * /api/books/{_id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
router.delete("/:_id", deleteRecord);

export default router;