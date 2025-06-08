const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const emailsRouter = require('./routes/emails');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/emails', emailsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
