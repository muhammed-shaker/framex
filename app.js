const express = require('express');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use('/api/v1', routes);

app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found' }));
app.use(errorMiddleware);

module.exports = app;