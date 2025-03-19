const db = require('../config/db');

// Fetch all APIs
exports.getAllAPIs = (callback) => {
  db.query('SELECT * FROM apis', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};