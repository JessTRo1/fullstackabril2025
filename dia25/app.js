const express = require('express');
const mongoose = require('mongoose');
const useRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mydapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use('/users', useRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

