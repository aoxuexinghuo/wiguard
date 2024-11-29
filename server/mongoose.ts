import mongoose from "mongoose";

// 连接到 MongoDB，如果尚未连接
if (mongoose.connection.readyState === 0) {
    mongoose.connect(process.env.MONGODB_URI!, {
    }).then(() => {
        console.log('Successfully connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}
