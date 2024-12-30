const express = require('express');
const multer = require('multer');
const path = require('path');
const File = require('../models/File');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const newFile = new File({ filename: req.file.filename });
    await newFile.save();
    res.status(200).json(newFile);
  } catch (err) {
    res.status(500).json({ error: 'File upload failed' });
  }
});

router.get('/', async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch files' });
  }
});

router.get('/view-db', async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json({ message: "Uploaded files in MongoDB", files });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch files from MongoDB' });
  }
});

module.exports = router;