const { config } = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

const PORT = config.APP_PORT;
const MONGO_URI = config.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
    console.error('DB connection failed', err);
    process.exit(1);
});