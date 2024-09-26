const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Importing Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const skillRoutes = require('./routes/skillRoutes');
const barterRoutes = require('./routes/barterRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/barters', barterRoutes);
app.use('/api/reviews', reviewRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
    
// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});