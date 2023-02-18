import mongoose, { connect } from "mongoose";
let MONGO_URL = process.env.MONGO_URL;

const connection = async () => {
    mongoose.set('strictQuery', true);
    connect(`${MONGO_URL}`)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch(error => {
            console.log(error);
        })
}

export default connection;