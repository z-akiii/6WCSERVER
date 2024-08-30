const express = require('express');
const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);
  req.file.mimetype = mime.lookup(req.file.originalname);
  res.sendFile(path.join(__dirname, 'public', 'file-uploaded.html'));
});

app.get('/', (req, res) => {
  // Ensure the correct path to the public folder
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
