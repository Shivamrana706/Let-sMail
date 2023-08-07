import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const database = () => {
    const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clusterletschat.not3hlw.mongodb.net/?retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting Database', error)
    }

}

export default database;