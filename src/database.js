import mongoose from "mongoose";

// const url = 'mongodb://127.0.0.1:27017/burgersandbeerr';
const url = 'mongodb://localhost:27017/burgersandbeer';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada');
})
