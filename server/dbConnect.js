const mongoose = require('mongoose');

module.exports = async() => {
    const mongoUri = 'mongodb+srv://priyanka:gYc7r9jGWP1cdkUX@cluster0.6jpefrp.mongodb.net/?retryWrites=true&w=majority';

    try{
        const connect =  await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

       console.log(`MongoDB connected: ${connect.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
   
}