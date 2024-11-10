import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) return;

        mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Error connecting to MongoDB:', err);
        });

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export { connectToDB };
