const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/verify', (req, res) => {
  res.render('verify');
});

router.get('/result', (req, res) => {
  res.render('result');
});

module.exports = router;
