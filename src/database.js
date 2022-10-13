import mongoose from "mongoose";

const url = "mongodb+srv://Ao-Rubi:PHw1oZrxL4mHy8ry@cluster0.x3upctr.mongodb.net/burguersandbeer";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada');
})
