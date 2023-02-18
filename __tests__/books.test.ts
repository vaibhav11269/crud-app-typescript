import app from "../src/app";
import mongoose from "mongoose";
import request from "supertest";

let MONGO_URL = process.env.MONGO_URL;
let server: any;
let id:string;
beforeEach(async () => {
    await mongoose.connect(`${MONGO_URL}`);
    server = app.listen(process.env.PORT);
});
afterEach(async () => {
    await mongoose.connection.close();
    server.close();
})
describe("GET /api/books", () => {
    it("should return all products", async () => {
        const res = await request(app).get("/api/books");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe("GET /api/books/:_id", () => {
    it("should return a product", async () => {
        const res = await request(app).get(
            "/api/books/63efb73f239983546fa3b8fc"
        );
        expect(res.statusCode).toBe(200);
        expect(res.body[0].name).toBe("The Psychology of Money");
    });
});

describe("POST /api/books/new", () => {
    it("should create a book", async () => {
        const res = await request(app).post("/api/books/new").send({
            name: "100 Side Hustles",
            author: "Chris Guillebeau",
            description: "Unexpected Ideas for Making Extra Money Without Quitting Your Day Job",
            price: 1000
        });
        expect(res.statusCode).toBe(201);
        id=res.body._id;
        expect(res.body.name).toBe("100 Side Hustles");
    });
});

describe("PUT /api/books/:_id", () => {
    it("should update a book", async () => {
      const res = await request(app)
        .put(`/api/books/${id}`)
        .send({
          price: 1000,
          description: "New Updated Description",
        });
      expect(res.statusCode).toBe(200);
      expect(res.body.price).toBe(1000);
    });
  });

  describe("DELETE /api/books/:_id", () => {
    it("should delete a book", async () => {
      const res = await request(app).delete(
        `/api/books/${id}`
      );
      expect(res.statusCode).toBe(200);
    });
  });