const apiModel = require('../models/apiModel');

exports.getAPIs = (req, res) => {
  apiModel.getAllAPIs((err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};