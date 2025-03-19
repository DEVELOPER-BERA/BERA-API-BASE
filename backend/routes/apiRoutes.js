const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/apis', apiController.getAPIs);

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get API list
router.get('/apis', (req, res) => {
  db.query('SELECT * FROM apis', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Update API status
router.post('/update-api', (req, res) => {
  const { id, status } = req.body;
  db.query('UPDATE apis SET status = ? WHERE id = ?', [status, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('API status updated successfully');
  });
});

module.exports = router;