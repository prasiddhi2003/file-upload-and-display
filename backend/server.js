const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/files', fileRoutes);

mongoose.connect('mongodb+srv://prasiddhimankodi:pdm@cluster0.gid6e.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => console.log('Connected to MongoDB Atlas'));