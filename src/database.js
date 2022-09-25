import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/burger&beer';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada');
})