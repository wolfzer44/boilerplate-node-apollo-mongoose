import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

//MONGOOSE CONNECTION
mongoose.connect(`mongodb://${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, { useNewUrlParser: true});

const ObjectId = mongoose.Types.ObjectId;
ObjectId.prototype.valueOf = function () {
    return this.toString();
};


