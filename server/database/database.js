import mongoose from 'mongoose';


const database = () => {
    const DB_URI = `mongodb+srv://shivamranaca:Mongodb123@clusterletschat.not3hlw.mongodb.net/?retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting Database', error)
    }

}

export default database;